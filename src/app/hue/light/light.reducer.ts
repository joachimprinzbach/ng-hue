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
        case LightActionTypes.TOGGLE_LIGHT_ON_SUCCESS:
            return {
                lights: state.lights.map(light => {
                    if (light.modelid === (action.payload as Light).modelid) {
                        light.state.on = true;
                    }
                    return light;
                })
            };
        default:
            return state;
    }
}

export const getLights = (state: State) => state.lights;
