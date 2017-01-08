import {NgHueAppState, getBridges, getLights} from "../app-state.reducer";
import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Light} from "./light/light.model";
import {LoadLightsAction} from "./light/light.actions";
import {Bridge} from "./bridge/bridge.model";

@Component({
    selector: 'jh-hue-page',
    template: `<jh-hue
                  [bridges]="bridges | async"
                  [lights]="lights | async"
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

}
