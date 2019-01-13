import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../Menu'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Menu',
            component: Menu,
            children: [{
                path: '/',
                name: 'Home',
                component: Home,
            }]
        }
    ]
})
