import {Action} from '@ngrx/store';
import {Bridge} from "../models/bridge.model";
import {Response} from "@angular/http";

export const HueActionTypes = {
    BRIDGE_SEARCH: '[Hue] Bridge Search',
    BRIDGE_SEARCH_SUCCESS: '[Hue] Bridge Search Success',
    BRIDGE_SEARCH_FAIL: '[Hue] Bridge Search Fail'
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

export type HueActions = BridgeSearchAction | BridgeSearchSuccessAction | BridgeSearchFailAction;
