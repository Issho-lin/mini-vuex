<template>
    <div>
        {{ name }} - {{ $store.state.account.num }} - {{ $store.getters.doubleNum }}
        <br>
        <button @click="dispatch('dispatch', '这是dispatch事件，由子组件派发到父组件')">dispatch</button>
        <button @click="eventBus">eventBus</button>
    </div>
</template>
<script>
export default {
    name: 'World',
    inject: ['name'],
    mounted () {
        console.log(this.$store)
    },
    methods: {
        dispatch(fn, name) {
            // let parent = this.$parent
            // while (parent) {
            //     parent.$emit(fn, name)
            //     parent = parent.$parent
            // }
            console.log('开始执行dispatch...')
            this.$dispatch(fn, name)
        },
        eventBus() {
            // EventBus发射
            this.$bus.$emit('world', '这是world共享出来的数据' + new Date().getTime())
        }
    },
}
</script>