<template>
    <div class="panel">
        {{ moduleName }} panel
        <component v-bind:is="moduleName"></component>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BlankPanel extends Vue {
    @Prop() private moduleName!: string;
}
</script>

<style lang="scss" scoped>
.panel {
    border: 1px solid #747474;
    padding: 10px;
    margin: 10px;
}
</style>
