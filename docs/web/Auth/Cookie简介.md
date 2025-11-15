---
date: 2025-11-05
category:
  - web
tag:
  - auth
---

# Cookie简介

## 基本特性

### 1. 存储限制
- 大小限制：单条 Cookie 通常不超过 4KB（不同浏览器略有差异）。
- 数量限制：每个域名下的 Cookie 数量通常限制在 50 条左右（不同浏览器不同）。

### 2. 生命周期
- **会话 Cookie**：默认情况下，Cookie 在浏览器关闭后自动删除（无过期时间）。
- **持久 Cookie**：通过设置 `expires` 或 `max-age` 定义过期时间，过期后自动删除。

### 3. 域名与路径限制
- **域名（Domain）**：Cookie 仅会发送到指定域名及其子域名（默认是当前域名，不包含子域名）。
- **路径（Path）**：限制 Cookie 仅在指定路径下生效（如 `/admin` 路径下的 Cookie 不会在 `/home` 路径发送）。

### 4. 安全性相关
- **HttpOnly**：设置后，前端 JavaScript 无法通过 `document.cookie` 访问（防止 XSS 攻击窃取 Cookie）。
- **Secure**：仅在 HTTPS 协议下才会发送 Cookie（防止中间人攻击）。
- **SameSite**：限制跨站请求时 Cookie 的发送（防止 CSRF 攻击），取值：
  - `Strict`：完全禁止跨站发送。
  - `Lax`：允许部分跨站请求（如链接跳转）发送（默认值）。
  - `None`：允许跨站发送，但必须同时设置 `Secure`。

## 工作流程

### 服务器设置 Cookie

```bash
# 响应头
Set-Cookie: username=zhangsan; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; domain=example.com; HttpOnly; Secure; SameSite=Lax
```

### 客户端发送 Cookie

```bash
# 请求头
Cookie: username=zhangsan; token=abc123
```

## 对比

### 局限性

- 存储容量小（4KB），不适合大量数据。
- 每次请求都会自动发送到服务器，增加网络开销。
- 安全性依赖 HttpOnly、Secure 等属性，配置不当易引发安全风险。

### 替代方案

- **LocalStorage**: 持久化存储（无过期时间），容量更大（通常 5-10MB），仅前端访问，不随请求发送。
- **SessionStorage**: 会话级存储（页面关闭后删除），容量较大，仅当前标签页可见。
- **IndexedDB**: 大型结构化数据存储（容量可达 GB 级），支持异步操作。

## 注意事项

1. 防止 XSS 攻击：敏感 Cookie（如认证令牌）必须设置 HttpOnly，避免前端 JS 读取。
2. 防止 CSRF 攻击：设置 SameSite=Lax 或 SameSite=Strict，并配合 CSRF Token 验证。
3. 敏感数据加密：Cookie 中的敏感信息（如用户 ID）需加密存储，避免明文泄露。
4. HTTPS 传输：涉及用户信息的 Cookie 应设置 Secure，确保仅通过 HTTPS 传输。
5. 合规性：遵守隐私法规，如欧盟 GDPR 要求用户同意后才能存储非必要 Cookie。