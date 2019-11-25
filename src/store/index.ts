import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from './state';
import { panels } from './panels-module';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    modules: {
        panels
    }
});
