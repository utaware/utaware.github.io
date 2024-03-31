---
date: 2024-03-31
category:
  - web
tag:
  - http
---

# SSL/TLS协议

SSL/TLS协议实际上最初叫做SSL协议（Secure Sockets Layer，安全套接字层），是由网景(Netscape)公司在1990年推出的一种标准安全协议，用于在网络通信中建立Web浏览器和Web服务器之间的加密链接。

TLS（Transport Layer Security，传输层安全）是 IETF组织 （工程任务组）在1999年将SSL3.0协议规范进行了标准化。由于SSL和TLS之间存在加密算法上的差异，因此不能互相操作，所以是两个不同的协议。

SSL（安全套接字层协议）和TLS（传输层安全协议）最初是相互独立的，但随着时间的推移，TLS逐渐成为SSL的后继者，并增强了其安全性。

## 层次结构

TLS 在实现上分为记录层和握手层两层

**握手层：**

- 握手协议(handshake protocol)：负责通信双方之间协商决定密码算法和共享密钥。
- 密码规格变更协议(change cipher spec protocol)：负责向通信对象传达变更密码方式的信号。
- 警告协议(alert protocol)：负责在发生错误时将错误传给对方。
- 应用数据协议(application data protocol)：是将TLS承载的应用数据传达给通讯对象。

**记录层：**

- TLS记录协议(record protocol): 负责对数据进行加密

## 加密

TLS的功能实现主要依赖于三类基本算法：散列函数 Hash、对称加密和非对称加密，其利用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证信息的完整性。

- 非对称加密(RSA ECC DH): 身份认证和密钥协商
- 对称加密(AES DES RC4): 信息加密
- 哈希算法(MD5 SHA): 完整校验

## 握手流程

1. ClientHello(客户端→服务端)
2. ServerHello(服务端→客户端)
3. Certificate(服务端→客户端)
4. ServerKeyExchange(服务端→客户端)
5. CertificateRequest(服务端→客户端)
6. ServerHelloDone(服务端→客户端)
7. Certificate(客户端→服务端)
8. ClientKeyExchange(客户端→服务端)
9. CertificateVerify(客户端→服务端)
10. ChangeCipherSpec(客户端→服务端)
11. Finished(客户端→服务端)
12. ChangeCipherSpec(服务端→客户端)
13. Finished(服务端→客户端)
14. 切换到TLS记录协议

### Client Hello

客户端发送TLS版本，支持的加密套件列表给服务端，并生成客户端随机数发送给服务端。

- Version: 协议版本（protocol version）指示客户端支持的最佳协议版本
- Random: 一个32字节数据，28字节是随机生成的，剩余的4字节包含额外的信息，与客户端时钟有关。在握手时，客户端和服务器都会提供随机数，客户端的暂记作 random_C (用于后续的密钥的生成)。这种随机性对每次握手都是独一无二的，在身份验证中起着举足轻重的作用。它可以防止重放攻击，并确认初始数据交换的完整性。
- Session ID: 在第一次连接时，会话ID（session ID）字段是空的，这表示客户端并不希望恢复某个已存在的会话。典型的会话ID包含32字节随机生成的数据，一般由服务端生成通过 ServerHello 返回给客户端。
- Cipher Suites: 密码套件（cipher suite）块是由客户端支持的所有密码套件组成的列表，该列表是按优先级顺序排列的
- Compression Methods: 客户端可以提交一个或多个支持压缩的方法。默认的压缩方法是 null，代表没有压缩
- Extension: 扩展（extension）块由任意数量的扩展组成。这些扩展会携带额外数据

### Server Hello

服务端确认TLS版本，选择使用的加密套件，生成服务端随机数发送给客户端。。

这个消息的结构与 ClientHello 类似，只是每个字段只包含一个选项，其中包含服务端的 random_S 参数 (用于后续的密钥协商)。服务器无需支持客户端支持的最佳版本。如果服务器不支持与客户端相同的版本，可以提供某个其他版本以期待客户端能够接受

### Server Certificate

典型的Certificate消息用于携带服务器X.509证书链。

该消息是可选的。根据协商出来的密码套件，服务端选择是否发送证书消息。在HTTPS网站中一般服务器会发送证书，如果协商出的密码套件是DH_anon或者ECDH_anon，则服务器不发送该消息，可能会遇到中间人攻击。

服务器发送证书一般有两个目的：一是进行身份验证，二是证书中包含服务器的公钥，该公钥结合密码套件的密钥协商算法协商出预备主密钥。

### Server Key Exchange

该消息是有条件才发送的。如果证书包含的信息不足以进行密钥交换，那么必须发送该消息。

- RSA、DH_DSS、DH_RSA(不发送)
  - 对于RSA密码套件，客户端计算出预备主密钥，然后使用服务器RSA公钥加密发送给服务端，服务端反解出预备主密钥即可，没有Server Key Exchange子消息也能完成密钥协商。
  - 对于DH_DSS/DH_RSA密钥套件，证书中已经包含静态DH信息，无须服务端额外发送Server Key Exchange子消息，客户端和服务端各协商出预备主密钥的一半密钥，结合起来就是预备主密钥。目前已经很少看到这样的密码套件，CA机构也不会在签发证书时包含静态DH信息。
- DH_anon、ECDH_anon(发送)
  - 使用的是静态DH/ECDH协商算法，但由于没有证书，所以需要ServerKeyExchange消息传递相关DH信息，传递的DH消息需要使用服务器的私钥进行签名
- DHE DSS、DHE RSA 、ECDHE ECDSA 、ECDHE RSA
  - 使用临时DH/ECDH密码协商算法，客户端每次连接服务器的时候，服务器会发送动态DH信息，这些信息不存在服务端证书中，需要通过Server Key Exchange消息传递，传递的DH信息需要使用服务器的私钥进行签名，该私钥和证书中包含的服务器公钥是一对。

### Certificate Request

该消息表示想要收到客户端的证书，一般是双向认证时有该消息。

::: tip

- 单向认证指的是通信双方只校验一方发送过来的数字证书，另一方不校验。通常是客户端根据服务器传过来的证书信息校验服务器的合法性。
- 双向认证指的是在通信双方都要校验对方发送过来的数字证书，一般应用于对安全性要求更高的领域。

:::

### Server Hello Done

表明服务器已经将所有预计的握手消息发送完毕。接下来等待和客户端协商出预备主密钥。

### Client Certificate

客户端验证证书的合法性，如果验证通过才会进行后续通信，否则根据错误情况不同做出提示和操作，合法性验证内容包括如下:

证书链的可信性trusted certificate path;

证书是否吊销revocation，有两类方式-离线CRL与在线OCSP，不同的客户端行为会不同;

有效期expiry date，证书是否在有效时间范围;

域名domain，核查证书域名是否与当前的访问域名匹配;

由PKI体系的内容可知，对端发来的证书签名是CA私钥加密的，接收到证书后，先读取证书中的相关的明文信息，采用相同的散列函数计算得到信息摘要，然后利用对应CA的公钥解密签名数据，对比证书的信息摘要，如果一致，则可以确认证书的合法性；然后去查询证书的吊销情况等

### Client Key Exchange

针对不同的密码套件，该消息一般有三种处理逻辑

- EncryptedPreMasterSecret
  - 如果 RSA算法用于身份验证和密钥交换，客户端会生成一个48字节的预备主密钥，然后用服务器证书中的公钥加密并发送给服务器端。最终发送的消息就是Encrypted PreMaster。
- ClientDiffieHellmanPublic
  - 如果密码套件中密钥协商算法是 DH算法，客户端必须发送 DH公钥给服务器端。
- ClientECDiffieHellmanPublic
  - 如果协商出的密码套件密钥协商算法是 ECDHE，客户端需要发送 ECDH公钥。

### 计算主密钥和密钥块

- 双方都拿到预备主密钥后，就可以根据以下公式计算出主密钥
- master_secret = PRF(pre_master_secret, “master secret”, ClientHello.random + ServerHello.random)
- 主密钥的长度固定是48字节。而预备主密钥的长度取决于密码套件算法，如果 RSA算法用来协商密钥，预备主密钥的长度是 48字节；如果 DH/ECDH算法用来协商密钥，长度取决于 DH /ECDH算法的公钥。
- 计算出主密钥后，还需要根据主密钥计算出密钥块。密钥块主要有六个
- MAC Key主要用于数据的完整性校验，Key用于加密数据。IV作为加密算法的初始化向量。

> - Client MAC Key
> - Server MAC Key
> - Client Key
> - Server Key
> - Client IV
> - Server IV

### Certificate verify

证书验证。双向认证时有该消息，这个时候客户端已经把证书发送给服务端了，但客户端还要向服务器证明证书中对应的私钥的正确和自己是会话持有者。

### Change Cipher Spec

通知对方，可以用协商好的密钥进行通信了。

### Finished [Encrypted Handshake Message]

确认所有握手消息没有被篡改。
