<template>
  <div class="hello">
    <span>HelloWorld.vue</span>

    <!--  1. 展示父组件传递的信息-->
    <h1>{{ msg }}</h1>

    <!--  2. 发送事件给父组件-->
    <button @click="emits('myclick','some msg from child')">emit: 发送</button>
    <br>
    <!--  3. 在页面中可以直接以$store使用-->
    <el-button @click="store.commit('add', 1)">点我+1:{{ $store.state.count }}</el-button>
  </div>
</template>

<script setup>
import {defineProps, reactive, defineEmits} from 'vue'
import {useStore} from 'vuex'

// 1. 接收父组件传递的信息
defineProps({
  msg: String
})

// 2. 定义需要派发的事件
const emits = defineEmits(['myclick'])

// 3. 在脚本中使用store
const store = useStore()
</script>

<style scoped>
.hello {
  background-color: beige;
  width: 80%;
  height: 80%;
}
</style>