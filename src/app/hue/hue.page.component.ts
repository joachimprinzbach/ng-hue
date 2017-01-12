import {NgHueAppState, getBridges, getLights, getGroups} from "../app-state.reducer";
import {Component, OnInit} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {Observable} from "rxjs";
import {Light} from "./light/light.model";
import {LoadLightsAction, ToggleLightOnAction, ToggleLightOffAction} from "./light/light.actions";
import {Bridge} from "./bridge/bridge.model";
import {Group} from "./group/group.model";
import {LoadGroupsAction} from "./group/group.actions";

@Component({
    selector: 'jh-hue-page',
    template: `<jh-hue
                  [bridges]="bridges | async"
                  [lights]="lights | async"
                  [groups]="groups | async"
                  (toggleLightOn)="onToggleOn($event)"
                  (bridgeSelected)="onBridgeSelected($event)">
               </jh-hue>`
})
export class HuePageComponent implements OnInit {

    bridges: Observable<Bridge[]>;
    lights: Observable<Light[]>;
    groups: Observable<Group[]>;

    constructor(private store: Store<NgHueAppState>) {
    }

    ngOnInit() {
        this.bridges = this.store.select(getBridges);
        this.lights = this.store.select(getLights);
        this.groups = this.store.select(getGroups);
    }

    onBridgeSelected(bridge: Bridge) {
        this.store.dispatch(new LoadLightsAction(bridge));
        this.store.dispatch(new LoadGroupsAction(bridge));
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
