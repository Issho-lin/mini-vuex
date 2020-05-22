import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  // 查找父元素
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data)
    if (child.$children.length) {
      // 递归调用，通过call修改this指向child
      boardcast.call(child, eventName, data)
    }
  })
}

Vue.prototype.$boardcast = function (eventName, data) {
  boardcast.call(this, eventName, data)
}

Vue.prototype.$bus = new Vue()

console.log(store)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')