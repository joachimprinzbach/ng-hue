import {Bridge} from "../models/bridge.model";
import {HueActions, HueActionTypes} from "./hue.actions";
import {Light} from "../models/light.model";

export interface State {
    bridges: Bridge[];
    lights: Light[];
}

const initialState: State = {
    bridges: [],
    lights: []
};

export function reducer(state = initialState, action: HueActions): State {
    switch (action.type) {
        case HueActionTypes.BRIDGE_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                bridges: action.payload,
            });
        case HueActionTypes.LOAD_LIGHTS_SUCCESS:
            return Object.assign({}, state, {
                lights: action.payload,
            });
        default:
            return state;
    }
}

export const getBridges = (state: State) => state.bridges;
export const getLights = (state: State) => state.lights;
