import {Action} from '@ngrx/store';
import {Bridge} from "../models/bridge.model";
import {Response} from "@angular/http";
import {Light} from "../models/light.model";

export const HueActionTypes = {
    BRIDGE_SEARCH: '[Hue] Bridge Search',
    BRIDGE_SEARCH_SUCCESS: '[Hue] Bridge Search Success',
    BRIDGE_SEARCH_FAIL: '[Hue] Bridge Search Fail',
    LOAD_LIGHTS: '[Hue] Load Lights',
    LOAD_LIGHTS_SUCCESS: '[Hue] Load Lights Success',
    LOAD_LIGHTS_FAIL: '[Hue] Load Lights Fail'
};

export class BridgeSearchAction implements Action {
    type = HueActionTypes.BRIDGE_SEARCH;

    constructor(public payload: any) {
    }
}

export class BridgeSearchSuccessAction implements Action {
    type = HueActionTypes.BRIDGE_SEARCH_SUCCESS;

    constructor(public payload: Bridge[]) {
    }
}

export class BridgeSearchFailAction implements Action {
    type = HueActionTypes.BRIDGE_SEARCH_FAIL;

    constructor(public payload: Response) {
    }
}

export class LoadLightsAction implements Action {
    type = HueActionTypes.LOAD_LIGHTS;

    constructor(public payload: Bridge) {
    }
}

export class LoadLightsSuccessAction implements Action {
    type = HueActionTypes.LOAD_LIGHTS_SUCCESS;

    constructor(public payload: Light[]) {
    }
}

export class LoadLightsFailAction implements Action {
    type = HueActionTypes.LOAD_LIGHTS_FAIL;

    constructor(public payload: Response) {
    }
}

export type HueActions = BridgeSearchAction
    | BridgeSearchSuccessAction | BridgeSearchFailAction
    | LoadLightsAction | LoadLightsSuccessAction | LoadLightsFailAction;
