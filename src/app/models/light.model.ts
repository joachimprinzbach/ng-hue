import {LightState} from "./light-state.model";

export interface Light {
    name: string;
    type: string;
    modelid: string;
    manufacturername: string;
    state: LightState;
    uniqueid: string;
}
