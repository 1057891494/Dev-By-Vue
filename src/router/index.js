import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from '../components/Welcome.vue';
import Filter from '../components/Filter.vue';

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: 'welcome'
        },
        {
            path: '/welcome',
            component: Welcome
        },
        {
            path: '/filter',
            component: Filter
        }
    ]
});

export default router;
