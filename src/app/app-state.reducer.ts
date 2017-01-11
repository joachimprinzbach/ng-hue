import {createSelector} from "reselect";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromBridge from "./hue/bridge/bridge.reducer";
import * as fromLight from "./hue/light/light.reducer";

export interface NgHueAppState {
    bridge: fromBridge.State;
    light: fromLight.State;
}
const reducers = {
    hue: fromBridge.reducer,
    light: fromLight.reducer
};

const developmentReducer: ActionReducer<NgHueAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<NgHueAppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    }
    return developmentReducer(state, action);
}
export const getBridgeState = (state: NgHueAppState) => state.bridge;
export const getLightState = (state: NgHueAppState) => state.light;
export const getBridges = createSelector(getBridgeState, fromBridge.getBridges);
export const getLights = createSelector(getLightState, fromLight.getLights);

