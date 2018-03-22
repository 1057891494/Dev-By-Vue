import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from '../components/Welcome.vue';
import Calendar from '../components/Calendar.vue';

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
            path: '/calendar',
            component: Calendar
        }
    ]
});

export default router;
