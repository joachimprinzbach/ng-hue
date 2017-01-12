import {Action} from '@ngrx/store';
import {Response} from "@angular/http";
import {Bridge} from "../bridge/bridge.model";
import {Group} from "./group.model";

export const GroupActionTypes = {
    LOAD_GROUPS: '[Light] Load Groups',
    LOAD_GROUPS_SUCCESS: '[Light] Load Groups Success',
    LOAD_GROUPS_FAIL: '[Light] Load Groups Fail',
};

export class LoadGroupsAction implements Action {
    type = GroupActionTypes.LOAD_GROUPS;

    constructor(public payload: Bridge) {
    }
}

export class LoadGroupsSuccessAction implements Action {
    type = GroupActionTypes.LOAD_GROUPS_SUCCESS;

    constructor(public payload: Group[]) {
    }
}

export class LoadGroupsFailAction implements Action {
    type = GroupActionTypes.LOAD_GROUPS_FAIL;

    constructor(public payload: Response) {
    }
}

export type GroupActions = LoadGroupsAction | LoadGroupsSuccessAction | LoadGroupsFailAction;
