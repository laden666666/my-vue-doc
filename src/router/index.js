import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Base from '../pages/Base'
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
            path: '/Base',
            name: 'Base',
            component: Base,
        },
        {
            path: '/Advanced',
            name: 'Advanced',
            component: Advanced,
        },
    ]
})
