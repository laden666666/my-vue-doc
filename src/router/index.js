import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Advanced from '../pages/Advanced'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Advanced',
            name: 'Advanced',
            component: Advanced,
        },
    ]
})
