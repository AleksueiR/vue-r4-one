<template>
    <div id="app" class="">
        <div id="nav" class="sm:flex-1">
            <router-link to="/home">Home</router-link> |
            <router-link to="/">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { PanelClass } from '@/store/panels-module';

const panelStore = namespace('panels');

import router from './router';
import store from './store';

/* import Cybertruck from '@/modules/Cybertruck.vue';
Vue.component('cybertruck', Cybertruck);
 */

@Component /* ({
    name: 'App',
    router,
    store
}) */
export default class App extends Vue {
    @panelStore.Action addPanelItem: (value: { value: PanelClass }) => Promise<void>;

    created(): void {
        this.addPanelItem({ value: { moduleName: 'cybertruck', external: false } });
    }

    beforeMount(): void {
        const externalModules = document.getElementById('app')!.getAttribute('data-modules');
        if (!externalModules) {
            return;
        }

        externalModules.split(',').forEach(name => this.addPanelItem({ value: { moduleName: name, external: true } }));
    }
}
// @import './styles.css';
</script>

<style lang="postcss">
#app {
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
}
</style>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
