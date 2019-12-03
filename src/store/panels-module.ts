import { ActionContext } from 'vuex';
import { RootState } from './state';

export interface PanelClass {
    moduleName: string;
    external: boolean;
}

export interface PanelsState {
    items: PanelClass[];
}

type PanelsContext = ActionContext<PanelsState, RootState>;

const state: PanelsState = {
    items: []
};
const getters = {};
const actions = {
    async addPanelItem(context: PanelsContext, { value }: { value: PanelClass }): Promise<void> {
        context.commit('addPanelItem', { value });
    }
};
const mutations = {
    addPanelItem(state: PanelsState, { value }: { value: PanelClass }): void {
        state.items.push(value);
    }
};

export const panels = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
