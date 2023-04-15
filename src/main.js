import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import '@/assets/css/main.scss';


Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    devtools: true,
    render: h => h(App)
});
