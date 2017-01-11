import {BridgeActions, BridgeActionTypes} from "./bridge.actions";
import {Bridge} from "./bridge.model";

export interface BridgeState {
    bridges: Bridge[];
}

const initialState: BridgeState = {
    bridges: []
};

export function reducer(state = initialState, action: BridgeActions): BridgeState {
    switch (action.type) {
        case BridgeActionTypes.BRIDGE_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                bridges: action.payload,
            });
        default:
            return state;
    }
}

export const getBridges = (state: BridgeState) => state.bridges;
