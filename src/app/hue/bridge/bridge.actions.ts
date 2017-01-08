import {Action} from '@ngrx/store';
import {Response} from "@angular/http";
import {Bridge} from "./bridge.model";

export const BridgeActionTypes = {
    BRIDGE_SEARCH: '[Hue] Bridge Search',
    BRIDGE_SEARCH_SUCCESS: '[Hue] Bridge Search Success',
    BRIDGE_SEARCH_FAIL: '[Hue] Bridge Search Fail'
};

export class BridgeSearchAction implements Action {
    type = BridgeActionTypes.BRIDGE_SEARCH;

    constructor(public payload: any) {
    }
}

export class BridgeSearchSuccessAction implements Action {
    type = BridgeActionTypes.BRIDGE_SEARCH_SUCCESS;

    constructor(public payload: Bridge[]) {
    }
}

export class BridgeSearchFailAction implements Action {
    type = BridgeActionTypes.BRIDGE_SEARCH_FAIL;

    constructor(public payload: Response) {
    }
}

export type BridgeActions = BridgeSearchAction | BridgeSearchSuccessAction | BridgeSearchFailAction;
