import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/debounceTime";
import {Injectable} from "@angular/core";
import {Effect, Actions} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {
    HueActionTypes, BridgeSearchSuccessAction, BridgeSearchFailAction, BridgeSearchAction,
    LoadLightsSuccessAction, LoadLightsFailAction, LoadLightsAction
} from "./hue.actions";
import {HueService} from "./hue.service";
import {Bridge} from "../models/bridge.model";
import {Response} from "@angular/http";
import {defer} from "rxjs/observable/defer";
import {Light} from "../models/light.model";

@Injectable()
export class HueEffects {

    constructor(private actions$: Actions, private hueService: HueService) {
    }

    @Effect()
    startSearch: Observable<any> = defer(() => {
        return of(new BridgeSearchAction({}));
    });

    @Effect()
    searchBridges$: Observable<Action> = this.actions$
        .ofType(HueActionTypes.BRIDGE_SEARCH)
        .switchMap(() =>
            this.hueService.findBridges()
                .map((bridges: Bridge[]) => new BridgeSearchSuccessAction(bridges))
                .catch((res: Response) => of(new BridgeSearchFailAction(res)))
        );

    @Effect()
    loadLights$: Observable<Action> = this.actions$
        .ofType(HueActionTypes.LOAD_LIGHTS)
        .map((action: LoadLightsAction) => action.payload)
        .mergeMap((bridge: Bridge) =>
            this.hueService.loadLights(bridge.internalipaddress)
                .map((lights: Light[]) => new LoadLightsSuccessAction(lights))
                .catch((res: Response) => of(new LoadLightsFailAction(res)))
        );
}


