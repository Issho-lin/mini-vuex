<template>
    <div>
        Hello
        <world></world>
    </div>
</template>
<script>
import World from './World'
export default {
    name: 'Hello',
    components: {
        World
    },
    mounted() {
        // EventBus监听
        this.$bus.$on('world', res => {
            console.log('这是在Hello组件里--', res)
        })
    }
}
</script>
