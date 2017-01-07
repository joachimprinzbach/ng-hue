import {NgHueAppState, getBridges} from "../app-state.reducer";
import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Bridge} from "../models/bridge.model";
import {BridgeSearchAction} from "./hue.actions";

@Component({
    selector: 'jh-hue-page',
    template: `<jh-hue
                  [bridges]="bridges | async">
               </jh-hue>`
})
export class HuePageComponent implements OnInit {

    bridges: Observable<Bridge[]>;

    constructor(private store: Store<NgHueAppState>) {
    }

    ngOnInit() {
        this.bridges = this.store.select(getBridges);
    }

}
