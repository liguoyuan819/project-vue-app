<template>
    <div>
         <div>
            <router-link to="/rockPaper"><span>石头剪刀布游戏</span></router-link>
        </div>
        <div>
            <router-link to="/playingCards"><span>纸牌记忆游戏</span></router-link>
        </div>
    </div>
</template>
<script lang="ts">

export default({
    name:"SideBar",
    setup() {
        
    },
})
</script>
