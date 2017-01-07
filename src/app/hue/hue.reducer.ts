import {Bridge} from "../models/bridge.model";
import {HueActions, HueActionTypes} from "./hue.actions";

export interface State {
    bridges: Bridge[];
}

const initialState: State = {
    bridges: []
};

export function reducer(state = initialState, action: HueActions): State {
    switch (action.type) {
        case HueActionTypes.BRIDGE_SEARCH_SUCCESS:
            return {
                bridges: action.payload
            };
        default:
            return state;
    }
}

export const getBridges = (state: State) => state.bridges;
