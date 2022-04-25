<template>
    <section class="app-main">
        <router-view :key="key" />
    </section>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router';
export default {
    name:"AppMain",
    setup(){
        const router = useRouter();
        const key = computed(() => {
            return router.currentRoute.value.path;
        });
        return {
            key
        }
    }
}
</script>
<style scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: left;
}
</style>