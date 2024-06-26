---
date: 2022-07-18
category:
  - web
tag:
  - http
---

# TCP协议

## 首部数据格式

<table style="text-align: center;">
  <tr>
    <td colspan="2">16位源端口号</td>
    <td colspan="2">16位目的端口号</td>
  </tr>
  <tr>
    <td colspan="4">32位序号</td>
  </tr>
  <tr>
    <td colspan="4">32位确认序号</td>
  </tr>
  <tr>
    <td>4位首部长度</td>
    <td>6位保留</td>
    <td>URG+ACK+PSH+RST+SYN+FIN</td>
    <td>16位窗口大小</td>
  </tr>
  <tr>
    <td colspan="2">16位检验和</td>
    <td colspan="2">16位紧急指针</td>
  </tr>
  <tr>
    <td colspan="4">选项</td>
  </tr>
  <tr>
    <td colspan="4">数据</td>
  </tr>
</table>

## 字段分析

> TCP报头中的源端口号和目的端口号同IP数据报中的源IP与目的IP唯一确定一条TCP连接。

*   源端口：源端口和IP地址的作用是标识报文的返回地址。
*   目的端口：端口指明接收方计算机上的应用程序接口。
*   序号：是TCP可靠传输的关键部分。序号是该报文段发送的数据组的第一个字节的序号。在TCP传送的流中，每一个字节都有一个序号。比如一个报文段的序号为300，报文段数据部分共有100字节，则下一个报文段的序号为400。所以序号确保了TCP传输的有序性。
*   确认号：即ACK，指明下一个期待收到的字节序号，表明该序号之前的所有数据已经正确无误的收到。确认号只有当ACK标志为1时才有效。比如建立连接时，SYN报文的ACK标志位为0。
*   首部长度/数据偏移：占4位，它指出TCP报文的数据距离TCP报文段的起始处有多远。由于首部可能含有可选项内容，因此TCP报头的长度是不确定的，报头不包含任何任选字段则长度为20字节，4位首部长度字段所能表示的最大值为1111，转化为10进制为15，15\*32/8=60，故报头最大长度为60字节。首部长度也叫数据偏移，是因为首部长度实际上指示了数据区在报文段中的起始偏移值。
*   保留：占6位，保留今后使用，但目前应都位0。
*   控制位：URG ACK PSH RST SYN FIN，共6个，每一个标志位表示一个控制功能。
    *   紧急URG：当URG=1，表明紧急指针字段有效。告诉系统此报文段中有紧急数据
    *   确认ACK：仅当ACK=1时，确认号字段才有效。TCP规定，在连接建立后所有报文的传输都必须把ACK置1。
    *   推送PSH：当两个应用进程进行交互式通信时，有时在一端的应用进程希望在键入一个命令后立即就能收到对方的响应，这时候就将PSH=1。
    *   复位RST：当RST=1，表明TCP连接中出现严重差错，必须释放连接，然后再重新建立连接。
    *   同步SYN：在连接建立时用来同步序号。当SYN=1，ACK=0，表明是连接请求报文，若同意连接，则响应报文中应该使SYN=1，ACK=1。
    *   终止FIN：用来释放连接。当FIN=1，表明此报文的发送方的数据已经发送完毕，并且要求释放。
*   窗口：滑动窗口大小，用来告知发送端接受端的缓存大小，以此控制发送端发送数据的速率，从而达到流量控制。窗口大小时一个16bit字段，因而窗口大小最大为65535。
*   校验和：奇偶校验，此校验和是对整个的 TCP 报文段，包括 TCP 头部和 TCP 数据，以 16 位字进行计算所得。由发送端计算和存储，并由接收端进行验证。
*   紧急指针：只有当 URG 标志置 1 时紧急指针才有效。紧急指针是一个正的偏移量，和顺序号字段中的值相加表示紧急数据最后一个字节的序号。 TCP 的紧急方式是发送端向另一端发送紧急数据的一种方式。
*   选项和填充：最常见的可选字段是最长报文大小，又称为MSS（Maximum Segment Size），每个连接方通常都在通信的第一个报文段（为建立连接而设置SYN标志为1的那个段）中指明这个选项，它表示本端所能接受的最大报文段的长度。选项长度不一定是32位的整数倍，所以要加填充位，即在这个字段中加入额外的零，以保证TCP头是32的整数倍。
*   数据部分： TCP 报文段中的数据部分是可选的。在一个连接建立和一个连接终止时，双方交换的报文段仅有 TCP 首部。如果一方没有数据要发送，也使用没有任何数据的首部来确认收到的数据。在处理超时的许多情况中，也会发送不带任何数据的报文段。

::: tip

* （A）不要将确认序号Ack与标志位中的ACK搞混了。
* （B）确认方Ack=发起方Req+1，两端配对。

:::

## 三次握手

**第一次握手**

> 客户端发送syn包(Seq=x)到服务器，并进入SYN_SEND状态，等待服务器确认；Seq(数据包本身的序列号)

**第二次握手**

> 服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（Seq=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；

**第三次握手**

> 客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。

```sequence
client ->> server: SYN = 1, Seq = X<br/>（客户端发送syn报文，并置发送序号为X）
server ->> client: SYN = 1, Seq = Y, ACK = X + 1<br/>（服务端发送syn+ack报文，并置发送序号为Y，确认序号为X+1）
client ->> server: ACK = Y + 1, Seq = Z<br/>（客户端发送ack报文，并置发送序号为Z，确认序号为Y+1）
```

## 四次挥手

**第一次挥手**

客户端发送一个FIN，用来关闭客户端到服务器的数据传送，也就是客户端告诉服务器：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，客户端依然会重发这些数据)，但是，此时客户端还可 以接受数据。
FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。

**第二次挥手**

服务器收到FIN包后，发送一个ACK给对方并且带上自己的序列号seq，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。
此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。

**第三次挥手**

服务器发送一个FIN，用来关闭服务器到客户端的数据传送，也就是告诉客户端，我的数据也发送完了，不会再给你发数据了。由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。

**第四次挥手**

主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。
服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。
至此，完成四次挥手。

```sequence
主动方 ->> 被动方: Fin = 1, Ack = Z, Seq = X<br/>（主动方发送Fin+Ack报文，并置发送序号为X）
被动方 ->> 主动方: ACK = X + 1, Seq = Z<br/>（被动房发送Ack报文，并置序号为Z，在确认序号为X+1）
被动方 ->> 主动方: Fin = 1, ACK = X, Seq = Y<br/>（被动方发送Fin+Ack报文，并置发送序号为Y，在确认序号为X）
主动方 ->> 被动方: ACK = Y, Seq = X<br/>（主动方发送Ack报文，并置发送序号为X，在确认序号为Y）
```

**为什么客户端最后还要等待2MSL**

MSL（Maximum Segment Lifetime），TCP允许不同的实现可以设置不同的MSL值。

第一，保证客户端发送的最后一个ACK报文能够到达服务器，因为这个ACK报文可能丢失，站在服务器的角度看来，我已经发送了FIN+ACK报文请求断开了，客户端还没有给我回应，应该是我发送的请求断开报文它没有收到，于是服务器又会重新发送一次，而客户端就能在这个2MSL时间段内收到这个重传的报文，接着给出回应报文，并且会重启2MSL计时器。
第二，防止类似与“三次握手”中提到了的“已经失效的连接请求报文段”出现在本连接中。客户端发送完最后一个确认报文后，在这个2MSL时间中，就可以使本连接持续的时间内所产生的所有报文段都从网络中消失。这样新的连接中不会出现旧连接的请求报文。

**为什么建立连接是三次握手，关闭连接确是四次挥手呢？**

建立连接的时候， 服务器在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。
而关闭连接时，服务器收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送，从而导致多了一次。


