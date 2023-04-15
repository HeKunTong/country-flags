import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 初始化 Vuex 并注册此模块
const store = new Vuex.Store({
    state: {
        loading: false
    },
    getters: {
        getLoading: state => state.loading
    },
    mutations: {
        //set方法
        setLoading(state, loading) {
            state.loading = loading;
        }
    }
});

export default store;