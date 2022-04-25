<template>
    <router-view/>
</template>

<script setup lang="ts">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
}
.left-side{
  width: 16%;
  background-image: linear-gradient(90deg, #0093E9 0%, #80D0C7 100%);
  height: 100vh;
}
.main-content{
  width: 84%;
}
</style>
