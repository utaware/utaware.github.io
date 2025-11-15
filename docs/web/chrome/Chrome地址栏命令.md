---
date: 2022-06-09
category:
  - web
tag:
  - browser
  - chrome
---

# Chrome地址栏命令

## 一、基础导航与信息类

| 命令 | 描述 |
| --- | --- |
| chrome://about | 列出所有可用的 `chrome://` 命令，等同于 `chrome://chrome-urls` |
| chrome://chrome-urls | 同 `chrome://about`，展示所有 Chrome 内置命令列表 |
| chrome://help | 打开「关于 Chrome」页面，显示版本信息并自动检查更新 |
| chrome://version | 详细展示 Chrome 版本号、安装路径、命令行参数及依赖组件版本 |
| chrome://terms | 显示 Google Chrome 及 Chrome 操作系统的服务条款与用户协议 |
| chrome://credits | 列出 Chrome 开发中使用的第三方软件及其许可证信息 |

## 二、内容管理类

| 命令 | 描述 |
| --- | --- |
| chrome://bookmarks | 打开书签管理页面，支持查看、添加、编辑和删除书签及文件夹 |
| chrome://history | 查看浏览历史记录，可按时间/关键词搜索，支持删除特定记录或清除历史 |
| chrome://downloads | 打开下载管理页面，显示所有下载记录，支持重新下载、打开文件或查看路径 |
| chrome://download-internals | 提供下载管理器调试信息，可手动输入 URL 触发下载并查看进度细节 |
| chrome://newtab | 打开默认新标签页，展示常用网站、搜索框及个性化内容 |
| chrome://new-tab-page | 同 `chrome://newtab`，打开默认新标签页 |
| chrome://new-tab-page-third-party | 打开第三方定制的新标签页（若有），功能与默认新标签页类似 |
| chrome://print | 打开打印预览页面，可设置打印范围、纸张大小、方向及预览效果 |

## 三、扩展与应用管理类

| 命令 | 描述 |
| --- | --- |
| chrome://extensions | 管理已安装的扩展程序，支持启用、禁用、卸载或加载未打包扩展 |
| chrome://apps | 展示已安装的 Chrome 应用程序列表，支持打开或管理应用 |
| chrome://management/ | 显示 Chrome 的管理状态，包括是否被企业策略管理及应用的策略详情 |

## 四、存储与缓存管理类

| 命令 | 描述 |
| --- | --- |
| chrome://appcache-internals | 管理 HTML5 应用的离线存储数据，可查看位置、大小及清除缓存 |
| chrome://blob-internals | 管理二进制大型物件（BLOB）存储，展示通过 `URL.createObjectURL` 创建的临时地址及数据 |
| chrome://cache | 显示浏览器本地缓存文件列表，包含缓存的 URL、大小、过期时间等信息 |
| chrome://indexeddb-internals | 管理 IndexedDB 数据库，展示各网站的数据库实例、存储大小及清除操作 |
| chrome://quota-internals | 显示各网站的本地存储配额使用情况，包括已用空间、剩余空间及存储类型 |

## 五、网络与通信类

| 命令 | 描述 |
| --- | --- |
| chrome://net-export | 导出浏览器网络活动日志，包含 HTTP 请求、响应头及连接详情，用于排查网络问题 |
| chrome://net-internals | 提供网络底层调试工具，可查看 DNS 缓存、代理设置、Socket 连接及域名安全策略 |
| chrome://network-errors | 罗列常见网络错误代码（如 `ERR_CONNECTION_REFUSED`）及原因、解决建议 |
| chrome://gcm-internals | 展示谷歌云消息服务（GCM）运行状态，包括消息日志及设备注册信息 |
| chrome://webrtc-internals | 提供 WebRTC 实时通信调试工具，查看音视频流、网络连接及媒体统计数据 |
| chrome://webrtc-logs | 存储并展示 WebRTC 通信日志，用于排查实时音视频通话问题 |

## 六、设备与硬件类

| 命令 | 描述 |
| --- | --- |
| chrome://bluetooth-internals | 提供蓝牙设备详细信息，包括已配对设备、连接状态及服务调试数据 |
| chrome://device-log | 记录设备相关事件日志（蓝牙、USB 设备的连接、断开及错误信息） |
| chrome://devices | 显示网络中已注册的设备（如手机、打印机），支持远程控制或文件传输 |
| chrome://gpu | 显示 GPU 硬件信息、驱动版本及图形加速状态，检测 GPU 渲染是否正常 |
| chrome://usb-internals | 显示已连接的 USB 设备信息，包括设备 ID、驱动状态及支持的接口 |

## 七、安全与隐私类

| 命令 | 描述 |
| --- | --- |
| chrome://safe-browsing | 展示安全浏览功能状态，包括恶意软件拦截记录、安全设置及诊断信息 |
| chrome://password-manager-internals | 展示密码管理器运行日志，包括密码保存、填充及同步记录 |
| chrome://policy | 显示应用于 Chrome 的用户策略和安全策略，包括企业管理设置及本地配置 |
| chrome://settings | 打开 Chrome 设置页面，可配置隐私、安全、外观等各项浏览器设置 |

## 八、用户交互与个性化类

| 命令 | 描述 |
| --- | --- |
| chrome://autofill-internals | 显示自动填充功能的内部运行日志，包括表单数据填充记录和规则匹配情况 |
| chrome://omnibox | 展示地址栏（Omnibox）的搜索建议及自动完成规则，支持调试搜索预测功能 |
| chrome://predictors | 列出地址栏用于预测网站的关键词及对应 URL，展示搜索建议的匹配规则 |
| chrome://signin-internals | 显示 Chrome 账户的登录状态、同步令牌及身份验证详情，用于排查登录问题 |
| chrome://site-engagement/ | 展示各网站的用户参与度评分，基于访问频率、互动深度等数据计算 |
| chrome://suggestions | 显示 Chrome 的功能建议及个性化推荐，基于用户使用习惯生成 |
| chrome://sync-internals | 详细展示浏览器同步功能的运行状态，包括同步类型、数据量及错误日志 |
| chrome://translate-internals | 显示翻译功能的配置信息，包括默认语言、翻译历史及支持的语言列表 |

## 九、开发与调试类

| 命令 | 描述 |
| --- | --- |
| chrome://accessibility | 显示当前标签页的无障碍访问相关信息，包括无障碍树结构等调试数据 |
| chrome://components | 展示浏览器所有组件（如 PDF Viewer、Widevine）的版本信息，支持手动更新 |
| chrome://conflicts | 检测并显示与 Chrome 主进程存在冲突的模块，帮助排查第三方软件干扰问题 |
| chrome://flags | 提供 Chrome 实验性功能的开关（如并行下载、新 JavaScript 引擎），需谨慎启用 |
| chrome://histograms | 展示浏览器各项功能的运行指标数据（如加载时间、点击次数），用于性能分析 |
| chrome://inspect | 提供远程调试工具，可检查连接设备（如手机）上的网页、扩展及应用，支持断点调试 |
| chrome://interstitials | 展示浏览器拦截页面（如证书错误、恶意网站警告）的预览及触发条件说明 |
| chrome://invalidations | 显示无效化调试日志，用于跟踪浏览器内部状态更新及缓存失效机制 |
| chrome://local-state | 以 JSON 格式展示 Chrome 的本地状态数据，包括安装路径、偏好设置等底层信息 |
| chrome://media-internals | 监控所有后台播放的媒体内容，展示播放状态、时长、音量及媒体源信息 |
| chrome://nacl | 显示对 Portable Native Client（PNaCl）的支持信息（该技术已逐步被 WebAssembly 替代） |
| chrome://ntp-tiles-internals | 显示新标签页中「常用网站」区块的站点信息，包括网址、图标地址及排序权重 |
| chrome://prefs-internals | 以 JSON 格式展示 Chrome 的所有偏好设置，包括用户配置、扩展设置等 |
| chrome://process-internals | 展示 Chrome 当前运行的所有进程（标签页、扩展、插件）及其内存占用、线程信息 |
| chrome://serviceworker-internals | 管理 Service Worker 脚本，展示注册状态、作用域及可手动触发更新或卸载 |
| chrome://system | 提供系统诊断数据，包括内存使用、CPU 信息、网络状态及浏览器进程详情 |
| chrome://tracing | 提供性能分析工具，可记录并可视化网页加载、UI 渲染、JavaScript 执行等耗时数据 |
| chrome://ukm | 展示用户体验指标（UKM）的收集状态，用于 Chrome 功能优化的数据统计 |
| chrome://user-actions | 记录用户在浏览器中的操作日志（如切换标签、点击书签），用于性能和交互分析 |

## 十、特殊功能与工具类

| 命令 | 描述 |
| --- | --- |
| chrome://dino/ | 启动 Chrome 离线时的小恐龙游戏，通过键盘方向键控制恐龙跳跃躲避障碍物 |
| chrome://discards | 展示标签页的活动状态、内存占用及优先级，支持手动释放闲置标签页内存 |
| chrome://crashes | 查看浏览器历史崩溃报告，包括崩溃时间、进程类型及错误 ID 等信息 |

## 十一、调试命令（用于测试与故障模拟）

| 命令 | 描述 |
| --- | --- |
| chrome://badcastcrash | 触发浏览器因错误广播导致的崩溃，用于测试崩溃恢复机制 |
| chrome://crash | 主动触发浏览器进程崩溃，用于测试崩溃报告和重启功能 |
| chrome://crashdump | 触发崩溃并生成崩溃转储文件，用于开发者分析崩溃原因 |
| chrome://kill | 强制终止浏览器主进程，模拟进程被意外结束的场景 |
| chrome://hang | 使浏览器进程进入挂起状态，模拟无响应场景 |
| chrome://shorthang | 使浏览器进程短暂挂起后恢复，用于测试短时间无响应的处理机制 |
| chrome://gpuclean | 清理 GPU 相关缓存和状态，用于排查 GPU 渲染异常问题 |
| chrome://gpucrash | 触发 GPU 进程崩溃，模拟显卡驱动故障导致的黑屏或渲染错误 |
| chrome://gpuhang | 使 GPU 进程挂起，模拟显卡无响应导致的页面卡死问题 |
| chrome://memory-exhaust | 触发浏览器内存耗尽场景，用于测试内存不足时的处理机制 |
| chrome://quit/ | 立即关闭浏览器所有窗口和进程 |
| chrome://restart/ | 重启浏览器，保留当前打开的标签页和会话状态 |
