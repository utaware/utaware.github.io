---
date: 2022-06-18
category:
  - node
tag:
  - npm
---

# package.json 字段说明

[docs](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## name(项目名称)

**some rules:**

* 必须小于等于214个字符
* 不能以.或_开头
* 不能有大写字母
* 不能包含任何非URL安全字符

**some tips:**

* 不要使用与核心节点模块相同的名称
* 不要在名称中添加“js”或“node”
* 尽可能简短并具有合理描述性
* 避免与已发布的npm包命名冲突

## version(版本号)

> 遵循 SemVer 规范, 必须可由node-semver解析。标准版本号采用 X.Y.Z 的格式

* X 是主版本号(major)：修改了不兼容的 API
* Y 是次版本号(minor)：新增了向下兼容的功能
* Z 为修订号(patch)：修正了向下兼容的问题

> 当某个版本改动比较大、并非稳定而且可能无法满足预期的兼容性需求时, 可能要先发布一个先行版本
> 先行版本号可以加到主版本号.次版本号.修订号的后面，通过 - 号连接一连串以句点分隔的标识符和版本编译信息

* 内部版本(alpha)
* 公测版本(beta)
* 正式版本的候选版本(rc-Release candiate)

[语义化版本2.0](https://semver.org/lang/zh-CN/)

```sh
# 查看某个模块的最新版本
npm view <packageName> version
# 查看某个模块的所有历史版本
npm view <packageName> versions
# 自动升级版本号
npm version patch
npm version minor
npm version major
```

## description & keywords(描述信息)

* 描述: String
* 关键字: Array

## homepage & bugs & repository & funding(相关地址)

* homepage: 主页地址
* bugs: 反馈地址
* repository: 仓库地址
* funding: 资助地址

```json
{
  "url": "http://path/to/bug",
  "email": "bug@example.com"
}
```

## license(协议)

[各种开源协议介绍](https://www.runoob.com/w3cnote/open-source-license.html)

```json
{
  "license": "UNLICENSED" // 如果不希望根据任何条款授予他人使用私有或未发布包的权利
}
```

## author & contributors(作者)

```json
{
  "author": {
    "name": "davy",
    "email": "",
    "url": ""
  },
  "author": "someone@xx.com (https://xxx.com/)",
  "contributors": [
    {
      "name": "laohan",
      "email": ""
    }
  ]
}
```

## files(文件条目)

> 描述了当包作为依赖项安装时要包含的条目，文件模式遵循与 类似的语法.gitignore

可以在包的根目录或子目录中提供一个.npmignore文件，以防止文件被包含在内。如果不存在.npmignore将使用.gitignor文件

> 一些特殊的文件和目录也会被包含或排除，无论它们是否存在于files数组中

::: tip 始终包含
* package.json
* README
* CHANGES/ CHANGELOG/HISTORY
* LICENSE / LICENCE
* NOTICE
* package.json -> main字段文件
:::

::: danger 总是被忽略
* .git
* CVS
* .svn
* .hg
* .lock-wscript
* .wafpickle-N
* .*.swp
* .DS_Store
* ._*
* npm-debug.log
* .npmrc
* node_modules
* config.gypi
* *.orig
* package-lock.json（ npm-shrinkwrap.json如果您希望发布，请使用）
:::

## bin(运行命令)

> 指定各个内部命令对应的可执行文件的位置

* 如果是全局安装，npm 将会使用符号链接把这些文件链接到/usr/local/node_modules/.bin/
* 如果是本地安装，会链接到./node_modules/.bin/

```json
"bin": {
  "my-app-cli": "./bin/cli.js"
}
```

## main & module & browser(入口)

* main: npm包的入口文件，browser环境和node环境均可使用
* module: npm包的ESM规范的入口文件，browser环境和node环境均可使用
* browser: npm包在browser环境下的入口文件

```js
// 文件目录
----- dist
  |-- index.browser.js
  |-- index.browser.mjs
  |-- index.js
  |-- index.mjs
```

```json
// package.json
{
  "name": "demo",
  "main": "dist/index.js",  // main
  "module": "dist/index.mjs", // module
  // browser 可定义成和 main/module 字段一一对应的映射对象，也可以直接定义为字符串
  "browser": {
    "./dist/index.js": "./dist/index.browser.js", // browser+cjs
    "./dist/index.mjs": "./dist/index.browser.mjs"  // browser+mjs
  },
  // "browser": "./dist/index.browser.js" // browser
}
```

::: tip 模块的加载循序(默认)
```js
import demo from 'demo'
```
**browser+mjs** > **module** > **browser+cjs** > **main**
:::

## exports(导出内容)

> 定义npm包的真实和全部的导出，优先级高于main、module、browser和file等字段。

1. 添加导出路径

```json
{
  "name": "pkg",
  "exports": {
    ".": "./main.mjs",
    "./foo": "./foo.js"
  }
}
```

```js
import { something } from "pkg"; // from "pkg/main.mjs"
const { something } = require("pkg/foo"); // require("pkg/foo.js")
```

2. 指定导出方式

```json
// package.json
{
  "name":"pkg",
  "main": "./main-require.cjs",
  "exports": {
    "import": "./main-module.js",
    "require": "./main-require.cjs"
  },
  "type": "module"
}
```

```js
const p = require('pkg') // "./main-require.cjs"
import p from 'pkg' // "./main-module.js"
```

## dependencie(依赖)

```sh
# dependencies:项目运行所需依赖的模块
npm install -S
npm install --save
# devDependencies:项目开发所需依赖的模块
npm install -D
npm install --save-dev
```

* URLs as Dependencies
* Git URLs as Dependencies
* GitHub URLs
* Local Paths

```json
{
  "dependencies" :{
    "foo" : "1.0.0 - 2.9999.9999", // 指定版本范围
    "bar" : ">=1.0.2 <2.1.2",
    "baz" : ">1.0.2 <=2.3.4",
    "boo" : "2.0.1", // 指定版本
    "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd" : "http://asdf.com/asdf.tar.gz", // 指定包地址
    "til" : "~1.2",  // 最近可用版本
    "elf" : "~1.2.3", // 1.2.x 以上, 不改变主次版本号的兼容
    "elf" : "^1.2.3", // 1.x.x以上, 不改变主版本号的兼容
    "two" : "2.x", // 2.1、2.2、...、2.9皆可用
    "thr" : "*",  // 任意版本
    "thr2": "", // 任意版本
    "lat" : "latest", // 当前最新
    "dyl" : "file:../dyl", // 本地地址
    "xyz" : "git+ssh://git@github.com:npm/npm.git#v1.0.27", // git 地址
    "fir" : "git+ssh://git@github.com:npm/npm#semver:^5.0",
    "wdy" : "git+https://isaacs@github.com/npm/npm.git",
    "xxy" : "git://github.com/npm/npm.git#v1.0.27",
  }
}
```

## peerDependencies & peerDependenciesMeta(同等依赖-插件)

用于指定当前包兼容的宿主版本，解决核心库被下载多次，以及统一核心库版本的问题。

**react-focus-lock:**

```json
{
 "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0"
  },
  "peerDependenciesMeta": {
    "@types/react": {
      "optional": true
    }
  }
}
```

## bundledDependencies(捆绑依赖)

指定发布的时候会被一起打包的模块.

```json
{
  "name": "fe-weekly",
  "description": "ELSE 周刊",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {
    "fw2": "^0.3.2",
    "grunt": "^1.0.1",
    "webpack": "^3.6.0"
  },
  "dependencies": {
    "gulp": "^3.9.1",
    "hello-else": "^1.0.0"
  },
  "bundledDependencies": [
    "fw2",
    "hello-else"
  ]
}
```

## optionalDependencies(可选依赖)

1. 如果一个依赖关系可以被使用，但你希望npm在找不到它或安装失败的情况下继续进行，那么你可以把它放在optionalDependencies对象中。这是一个包名到版本或url的映射，就像依赖对象一样。不同的是，构建失败不会导致安装失败。
2. 如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包，所以不要在两个地方都写。

## directories(目录)

> 制定一些方法来描述模块的结构, 用于告诉用户每个目录在什么位置。

## scripts(简化终端命令)

> 定义脚本, 并且在执行该脚本的时候会将本地目录的node_modules/.bin子目录加入PATH变量

```json
{
  "script": {
    "build": "esbuild index.js",
    "build": "./node_modules/.bin/esbuild index.js"
  }
}
```

## config(配置参数)

> 包脚本中使用的配置参数

```json
// npm config set foo:port 8001. 修改这个配置的prot
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

## os & cpu & engines (环境说明)

* os: 系统(process.platform)
* cpu: cpu架构(process.arch)
* engines: node版本

```json
{
  "os" : ["darwin", "linux"], // 白名单
  "os" : ["!win32"], // 黑名单
  "cpu" : ["x64", "ia32"],
  "cpu" : ["!arm", "!mips"],
  "engines": {
   "node": ">= 8.16.0" // 仅说明
  },
}
```

## private(私有)

> 通过设置该字段可以防止私有模块被无意间发布出去

```json
{
  "private": true
}
```

## publishConfig(发布设置)

此字段包含各种设置，仅当从本地来源生成包时才考虑这些设置

```json
{
  "publishConfig": {
    "access": "public", // 定义将程序包发布到 npm 注册表时要使用的程序包访问级别
    "bin": "./build/bin.js",
    "browser": "./build/browser.js",
    "executableFiles": ["./dist/shim.js"],
    "main": "./build/index.js",
    "module": "./build/index.mjs",
    "registry": "https://npm.pkg.github.com"
  }
}
```

## preferGlobal(预警告-全局安装)

当用户不将该模块安装为全局模块时(即不用–g参数)，是否显示警告

```json
{
  "preferGlobal": false
}
```

## type(模块化规范类型)

从node13.2.0开始后，node正式支持了ES module规范，在package.json中可以通过type字段来声明npm包遵循的模块化规范

```json
{
  "type": "module"||"commonjs"
}
```

::: tip 其他方式
除了type可以指定模块化规范外，通过文件的后缀来指定文件所遵循的模块化规范，以.mjs结尾的文件就是使用的ESModule规范，以.cjs结尾的遵循的是commonjs规范
:::

## workspaces(软链接)

在workspaces声明目录下的package会软链到最上层root package的node_modules中, 解决了本地文件系统中如何在一个顶层root package下管理多个子packages的问题

```json
// npm v7.x => node@15.0.0
{
  "name": "my-project",
  "workspaces": [
    "packages/a"
  ]
}
```

## unpkg

配置unpkg字段后,发布到npmjs.com中的包会自动同步到unpkg.com(源自npm的全球快速CDN)上，一般为umd格式。

```json
{
  "unpkg": "dist/antd.min.js"
}
```

## typings

指定ts文件的入口

```json
{
  "typings": "lib/index.d.ts"
}
```

## sideEffects

与webpack相关的字段，声明该模块是否包含sideEffects(副作用)，从而可以为tree-shaking提供更大的优化空间。

```json
{
  "sideEffects": ["dist/*", "es/**/style/*", "lib/**/style/*", "*.less"]
}
```

## gitHooks & lint-staged

```json
"gitHooks": {
  "pre-commit": "lint-staged",
  "commit-msg": "node scripts/verify-commit-msg.js"
},
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "git add"
  ]
}
```
