// storePlugin.ts
import { type App, inject, reactive, computed } from "vue";
import { type EnhancedStore, combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({})
export const storeKey = Symbol("Redux-Store");
export type RootState = ReturnType<typeof rootReducer>

export const createRedux = (store: EnhancedStore) => {
    const rootStore = reactive<{ state: RootState }>({
        state: store.getState(),
    });
    const plugin = {
        install: (app: App) => {
            app.provide<{ state: RootState }>(storeKey, rootStore);

            store.subscribe(() => {
                rootStore.state = store.getState();
            });
        },
    };
    return plugin;
};