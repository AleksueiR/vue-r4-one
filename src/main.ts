import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import Cybertruck from '@/modules/Cybertruck.vue';
Vue.component('cybertruck', Cybertruck);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

(window as any).r4One = {
    Vue,
    app
};
