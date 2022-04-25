import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import  RockPaper  from '../components/games/games_01/rockPaper.vue'
import PlayingCards from '../components/games/games_02/playingCards.vue'
import Layout from '../components/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/dashboard",
        name:"Dashboard",
        component:Layout,
        redirect:RockPaper,
        children:[
            {
                path:'/rockPaper',
                name:'rockPaper',
                component:RockPaper
            },
            {
                path:'/playingCards',
                name:'playingCards',
                component:PlayingCards
            },
        ]
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;