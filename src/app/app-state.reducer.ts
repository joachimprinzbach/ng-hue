import {createSelector} from "reselect";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromHue from "./hue/hue.reducer";

export interface NgHueAppState {
    hue: fromHue.HueState;
}
const reducers = {
    hue: fromHue.reducer,
};

const developmentReducer: ActionReducer<NgHueAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<NgHueAppState> = combineReducers(reducers);

export function reducer(state: NgHueAppState, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    }
    return developmentReducer(state, action);
}
const getHueState = (state: NgHueAppState) => state.hue;
export const getBridges = createSelector(getHueState, fromHue.getBridges);
export const getLights = createSelector(getHueState, fromHue.getLights);
export const getGroups = createSelector(getHueState, fromHue.getGroups);

