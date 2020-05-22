<template>
  <div>
    {{ msg }}
    <button @click="handleClick">修改msg</button>
    <hr>
    <hello @dispatch="dispatch" @boardcast="boardcast"></hello>
    <h2>这是从mini-vuex中获取的count：{{ $store.state.count }}</h2>
    <h2>这是从mini-vuex中获取的doubleCount：{{ $store.getters.doubleCount }}</h2>
    <button @click="increment">increment</button>
    <button @click="asyncIncrement">asyncIncrement</button>
  </div>
</template>

<script>
import Hello from './Hello'
export default {
  name: 'HelloWorld',
  components: {
    Hello
  },
  props: {
    msg: String,
    // change: Function
  },
  methods: {
    handleClick() {
      // 通知父组件执行事件以接收该子组件的数据
      this.$emit('change', 'vue-component-communication')
      // this.$parent.changeMsg('vue-component-communication')
      // this.change('vue-component-communication')
    },
    dispatch(name) {
      console.log('这是HelloWorld传给Hello的dispatch事件---', name)
    },
    boardcast(name) {
      console.log('这是HelloWorld传给Hello的boardcast事件---', name);
    },
    increment() {
      this.$store.commit('increment', 1)
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement', 10)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
