import {Group} from "./group.model";
import {GroupActions, GroupActionTypes} from "./group.actions";

export interface GroupsState {
    groups: Group[];
}

const initialState: GroupsState = {
    groups: []
};

export function reducer(state = initialState, action: GroupActions): GroupsState {
    switch (action.type) {
        case GroupActionTypes.LOAD_GROUPS_SUCCESS:
            return Object.assign({}, state, {
                groups: action.payload,
        });
        default:
            return state;
    }
}

export const getGroups = (state: GroupsState) => state.groups;
