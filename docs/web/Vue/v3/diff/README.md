---
category:
  - web
tag:
  - vue
---

# v2&v3

## 数据绑定原理

- v2: `Object.definePropert()`
- v3: `Proxy`

## 支持Fragments

- v2: 否, 单个根节点
- v3: 是, 多个根节点

## api

- v2: 选项式
- v3: 组合式

## 创建实例

```js
// v2
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
// v3
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

## 原型属性

```js
// v2
Vue.prototype.msg = 'hello'
// v3
app.config.globalProperties.msg = 'hello'
```

## 全局API



## 生命周期

| Vue2 | vue3 |
| :-: | :-: |
| beforeCreate | setup |
| created | setup |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| updated | onUpdated |
| beforeDestroy | onBeforeUnmount |
| destroyed | onUnmounted |
| activated | onActivated |
| deactivated | onDeactivated |
| errorCaptured | onErrorCaptured |
| - | onRenderTriggered |
| - | onRenderTracked |

## 组件通信

| 方式 | Vue2 |	Vue3 |
| :-: | :-: | :-: |
| 父传子 | props | props |
| 子传父 | $emit | emits |
| 父传子 | $attrs | attrs |
| 子传父 | $listeners | 无(合并到 attrs方式) |
| 父传子 | provide | provide |
| 子传父 | inject | inject |
| 子组件访问父组件 | $parent | 无 |
| 父组件访问子组件 | $children | 无 |
| 父组件访问子组件 | $ref | expose&ref |
| 兄弟传值 | EventBus | mitt |
