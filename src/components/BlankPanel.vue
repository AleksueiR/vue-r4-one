<template>
    <div class="panel">
        {{ moduleName }} panel
        <component v-bind:is="moduleName"></component>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import About from '../views/About.vue';
// import Cybertruck from '../modules/Cybertruck.vue';

@Component
export default class BlankPanel extends Vue {
    @Prop() private moduleName!: string;
    @Prop() private moduleExternal!: boolean;

    // module?: Cybertruck;

    @Watch('moduleName', { immediate: true })
    onModuleNameChange(name: string): void {
        // const customModule = await import(/* webpackChunkName: "cybertruck" */ `@/modules/${this.moduleName}.vue`);

        /* Cybertruck.default;
        this.module;
        this.module = Cybertruck.default; */

        // console.log('loading async component');
        // check if component is already loaded or has been registered elsewhere
        if (this.$options.components && this.$options.components[this.moduleName]) {
            return;
        }

        Vue.component(this.moduleName, () => ({
            component: this.moduleExternal
                ? this.externalComponent(this.moduleName, `./${this.moduleName}.module.js`)
                : import(/* webpackChunkName: "cybertruck" */ `@/modules/${this.moduleName}.vue`)
        }));
    }

    externalComponent(name: string, url: string): Promise<any> {
        const anyWindow = window as any;

        // if (anyWindow[name]) return anyWindow[name];

        const component = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.addEventListener('load', () => {
                resolve(anyWindow.r4One[name]);
            });
            script.addEventListener('error', () => {
                reject(new Error(`Error loading ${url}`));
            });
            script.src = url;
            document.head.appendChild(script);
        });

        // console.log(component);

        return component;
    }
}
</script>

<style lang="scss" scoped>
.panel {
    border: 1px solid #747474;
    padding: 10px;
    margin: 10px;
}
</style>
