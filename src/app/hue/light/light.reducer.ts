import {LightActions, LightActionTypes} from "./light.actions";
import {Light} from "./light.model";

export interface State {
    lights: Light[];
}

const initialState: State = {
    lights: []
};

export function reducer(state = initialState, action: LightActions): State {
    switch (action.type) {
        case LightActionTypes.LOAD_LIGHTS_SUCCESS:
            return Object.assign({}, state, {
                lights: action.payload,
            });
        default:
            return state;
    }
}

export const getLights = (state: State) => state.lights;
