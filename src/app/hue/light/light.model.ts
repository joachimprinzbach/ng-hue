export interface Light {
    name: string;
    type: string;
    modelid: string;
    manufacturername: string;
    state: LightState;
    uniqueid: string;
    id: string;
}

export interface LightState {
    on?: boolean;
    bri?: number;
    hue?: number;
    sat?: number;
    xy?: number[];
    ct?: number;
    alert?: string;
    effect?: string;
    colormode?: string;
    reachable?: boolean;
    transitiontime?: number;
}

