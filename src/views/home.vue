<template>
  <div class="home">
    <span>home.vue</span>
    <HelloWorld msg="模板" @myclick="handleClick"/>
    <br>
    <span ref="msgBox">消息</span>
  </div>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import {ref} from 'vue'

const msgBox = ref(null)
const handleClick = (msg) => {
  console.log(msg)
  msgBox.value.innerText = msg
}
</script>
<style scoped>
.home {
  background-color: azure;
  width: 80%;
  height: 80%;
}
</style>