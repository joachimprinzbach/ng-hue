import {Action} from '@ngrx/store';
import {Response} from "@angular/http";
import {Light} from "./light.model";
import {Bridge} from "../../models/bridge.model";

export const LightActionTypes = {
    LOAD_LIGHTS: '[Hue] Load Lights',
    LOAD_LIGHTS_SUCCESS: '[Hue] Load Lights Success',
    LOAD_LIGHTS_FAIL: '[Hue] Load Lights Fail'
};

export class LoadLightsAction implements Action {
    type = LightActionTypes.LOAD_LIGHTS;

    constructor(public payload: Bridge) {
    }
}

export class LoadLightsSuccessAction implements Action {
    type = LightActionTypes.LOAD_LIGHTS_SUCCESS;

    constructor(public payload: Light[]) {
    }
}

export class LoadLightsFailAction implements Action {
    type = LightActionTypes.LOAD_LIGHTS_FAIL;

    constructor(public payload: Response) {
    }
}

export type LightActions = LoadLightsAction | LoadLightsSuccessAction | LoadLightsFailAction;
