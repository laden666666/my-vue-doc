import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Base from '../pages/Base'

import AdvancesCode from '../pages/Advances/Code'
import AdvancesDemo from '../pages/Advances/Demo'
import AdvancesInstructions from '../pages/Advances/Instructions'
import AdvancesProps from '../pages/Advances/Props'

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
            path: '/Advances/Code',
            name: 'AdvancesCode',
            component: AdvancesCode,
        },
        {
            path: '/Advances/Demo',
            name: 'AdvancesDemo',
            component: AdvancesDemo,
        },
        {
            path: '/Advances/Instructions',
            name: 'AdvancesInstructions',
            component: AdvancesInstructions,
        },
        {
            path: '/Advances/Props',
            name: 'AdvancesProps',
            component: AdvancesProps,
        },
    ]
})
