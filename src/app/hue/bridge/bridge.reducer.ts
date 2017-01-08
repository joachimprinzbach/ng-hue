import {BridgeActions, BridgeActionTypes} from "./bridge.actions";
import {Bridge} from "./bridge.model";

export interface State {
    bridges: Bridge[];
}

const initialState: State = {
    bridges: []
};

export function reducer(state = initialState, action: BridgeActions): State {
    switch (action.type) {
        case BridgeActionTypes.BRIDGE_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                bridges: action.payload,
            });
        default:
            return state;
    }
}

export const getBridges = (state: State) => state.bridges;
