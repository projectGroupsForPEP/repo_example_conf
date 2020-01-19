import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home/home.vue'
import Show from './pages/show/show.vue'

const routerPath = LG_CONFIG_ROUTERPATH
Vue.use(VueRouter)
const routes = [{
        path: `${routerPath}/home`,
        name: 'Home',
        component: Home
    },
    {
        path: `${routerPath}/show`,
        name: 'Show',
        component: Show
    },
    {
        path: `${routerPath}/*`,
        component: Home
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})