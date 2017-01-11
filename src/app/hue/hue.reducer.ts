import {combineReducers} from "@ngrx/store";
import * as fromBridge from "./bridge/bridge.reducer";
import * as fromLight from "./light/light.reducer";

export interface HueState {
    bridge: fromBridge.BridgeState;
    light: fromLight.LightState;
}

const reducers = {
    hue: fromBridge.reducer,
    light: fromLight.reducer
};

export function reducer(state: any, action: any) {
    return combineReducers(reducers)(state, action);
}

export const getBridges = fromBridge.getBridges;
export const getLights = fromLight.getLights;

