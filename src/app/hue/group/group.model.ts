export interface Group {
    name: string;
    lights: number[];
    type: string;
    class: string;
    state: GroupState;
    action: GroupAction;
}

export interface GroupAction {
    on: boolean;
    bri: number;
    hue: number;
    sat: number;
    effect: string;
    xy: number[];
    ct: number;
    alert: string;
    colormode: string;
}

export interface GroupState {
    all_on: boolean;
    any_on: boolean;
}

