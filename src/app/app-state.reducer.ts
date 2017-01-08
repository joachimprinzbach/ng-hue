import {createSelector} from "reselect";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromHue from "./hue/hue.reducer";
import * as fromLight from "./hue/light/light.reducer";

export interface NgHueAppState {
    hue: fromHue.State;
    light: fromLight.State;
}
const reducers = {
    hue: fromHue.reducer,
    light: fromLight.reducer
};

const developmentReducer: ActionReducer<NgHueAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<NgHueAppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    }
    return developmentReducer(state, action);
}
export const getHueState = (state: NgHueAppState) => state.hue;
export const getLightState = (state: NgHueAppState) => state.light;
export const getBridges = createSelector(getHueState, fromHue.getBridges);
export const getLights = createSelector(getLightState, fromLight.getLights);

