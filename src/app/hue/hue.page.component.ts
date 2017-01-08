import {NgHueAppState, getBridges, getLights} from "../app-state.reducer";
import {Component, OnInit} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {Observable} from "rxjs";
import {Light} from "./light/light.model";
import {LoadLightsAction, ToggleLightOnAction, ToggleLightOffAction} from "./light/light.actions";
import {Bridge} from "./bridge/bridge.model";

@Component({
    selector: 'jh-hue-page',
    template: `<jh-hue
                  [bridges]="bridges | async"
                  [lights]="lights | async"
                  (toggleLightOn)="onToggleOn($event)"
                  (bridgeSelected)="onBridgeSelected($event)">
               </jh-hue>`
})
export class HuePageComponent implements OnInit {

    bridges: Observable<Bridge[]>;
    lights: Observable<Light[]>;

    constructor(private store: Store<NgHueAppState>) {
    }

    ngOnInit() {
        this.bridges = this.store.select(getBridges);
        this.lights = this.store.select(getLights);
    }

    onBridgeSelected(bridge: Bridge) {
        this.store.dispatch(new LoadLightsAction(bridge));
    }

    onToggleOn(event) {
        let action: Action;
        if (event.newState) {
            action = new ToggleLightOnAction(event.light);
        } else {
            action = new ToggleLightOffAction(event.light);
        }
        this.store.dispatch(action);
    }
}
