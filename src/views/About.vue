<template>
    <div class="about">
        <h1>This is an about page</h1>

        <div class="list" v-for="(item, index) in items" :key="`${item.moduleName}-${index}`">
            <blank-panel :module-name="item.moduleName" :module-external="item.external"></blank-panel>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { PanelClass } from '@/store/panels-module';

import BlankPanel from '@/components/BlankPanel.vue';

const panelStore = namespace('panels');

@Component({
    components: {
        'blank-panel': BlankPanel
    }
})
export default class About extends Vue {
    @panelStore.State items: PanelClass[];
}
</script>

<style lang="scss" scoped>
.about .list {
    display: flex;
    justify-content: center;
}
</style>
