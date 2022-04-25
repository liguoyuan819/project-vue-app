<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <app-main/>
        </div>
    </div>
</template>
<script lang="ts">
import { Sidebar, AppMain } from "./components"
export default {
    name:"Layout",
    components:{
        sidebar: Sidebar,
        'app-main':AppMain
    }
}
</script>
<style scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .sidebar-container {
      width: 20% !important;
      background-image: linear-gradient(90deg, #0093E9 0%, #80D0C7 100%);
      height: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
    }
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 20%;
        position: relative;
    }
</style>