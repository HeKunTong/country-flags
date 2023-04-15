import Vue from 'vue';
import Router from 'vue-router';

/* eslint-disable */
const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        component: () => import('@/pages/Home')
    }, {
        path: '*',
        redirect: '/'
    }]
});

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err);
};

// router.beforeEach((to, from, next) => {
//     if (to.path !== '/') {
//         next('/');
//     } else {
//         next();
//     }
// });

Vue.use(Router);

export default router;
