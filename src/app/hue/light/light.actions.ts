import {Action} from '@ngrx/store';
import {Response} from "@angular/http";
import {Light} from "./light.model";
import {Bridge} from "../bridge/bridge.model";

export const LightActionTypes = {
    LOAD_LIGHTS: '[Light] Load Lights',
    LOAD_LIGHTS_SUCCESS: '[Light] Load Lights Success',
    LOAD_LIGHTS_FAIL: '[Light] Load Lights Fail',
    TOGGLE_LIGHT_ON: '[Light] Toggle Light On',
    TOGGLE_LIGHT_ON_SUCCESS: '[Light] Toggle Light On Success',
    TOGGLE_LIGHT_ON_FAIL: '[Light] Toggle Light On Fail',
    TOGGLE_LIGHT_OFF: '[Light] Toggle Light OFF',
    TOGGLE_LIGHT_OFF_SUCCESS: '[Light] Toggle Light Off Success',
    TOGGLE_LIGHT_OFF_FAIL: '[Light] Toggle Light Off Fail'
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

export class ToggleLightOnAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_ON;

    constructor(public payload: Light) {
    }
}

export class ToggleLightOnSuccessAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_ON_SUCCESS;

    constructor(public payload: Light) {
    }
}

export class ToggleLightOnFailAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_ON_FAIL;

    constructor(public payload: Response) {
    }
}

export class ToggleLightOffAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_OFF;

    constructor(public payload: Light) {
    }
}

export class ToggleLightOffSuccessAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_OFF_SUCCESS;

    constructor(public payload: Light) {
    }
}

export class ToggleLightOffFailAction implements Action {
    type = LightActionTypes.TOGGLE_LIGHT_OFF_FAIL;

    constructor(public payload: Response) {
    }
}

export type LightActions = LoadLightsAction | LoadLightsSuccessAction | LoadLightsFailAction |
    ToggleLightOnAction | ToggleLightOnFailAction | ToggleLightOnSuccessAction |
    ToggleLightOffAction | ToggleLightOffFailAction | ToggleLightOffSuccessAction;
