import {combineReducers} from "@ngrx/store";
import * as fromBridge from "./bridge/bridge.reducer";
import * as fromLight from "./light/light.reducer";
import {createSelector} from "reselect";

export interface HueState {
    bridge: fromBridge.BridgeState;
    light: fromLight.LightState;
}

const reducers = {
    bridge: fromBridge.reducer,
    light: fromLight.reducer
};

export function reducer(state: HueState, action: any) {
    return combineReducers(reducers)(state, action);
}

export const getBridges = createSelector((state: HueState) => state.bridge, fromBridge.getBridges);
export const getLights = createSelector((state: HueState) => state.light, fromLight.getLights);

