<template>
  <div id="app">
    <HelloWorld :msg="msg" @change="changeMsg" @dispatch="dispatch"/>
    <button @click="boardcast">boardcast</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'hello'
    }
  },
  // provide: {
  //   name: 'name'
  // },
  provide() {
    return {
      name: this.name
    }
  },
  mounted() {
    this.$bus.$on('world', res => {
      console.log('这是在App组件里--', res)
    })
  },
  methods: {
    changeMsg(msg) {
      console.log('hello-world: change');
      this.msg = msg
    },
    boardcast() {
      // console.log(this.$children);
      // this.$children.forEach(child => {
      //   // child.$emit('dispatch')
      //   // child.$emit('change')
      // })
      console.log('开始执行boardcast...');
      this.$boardcast('boardcast', '这是boardcast事件，由父组件通知到子组件')
    },
    dispatch(name) {
      console.log('这是APP传给HelloWorld的dispatch事件---', name)
      this.name = name
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
