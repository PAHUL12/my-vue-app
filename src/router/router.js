import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home-View.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About-View.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
