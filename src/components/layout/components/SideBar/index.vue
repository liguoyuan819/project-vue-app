<template>
    <div class="side-bar">
        <div>
            <router-link to="/rockPaper"><span>石头剪刀布游戏</span></router-link>
        </div>
        <div>
            <router-link to="/playingCards"><span>纸牌记忆游戏</span></router-link>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"Sidebar"
}
</script>
<style scoped>
.side-bar{
    width: 100%;
    height: 100%;
    color: #000;
}
</style>