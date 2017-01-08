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
import {Response} from "@angular/http";
import {HueService} from "../hue.service";
import {LightActionTypes, LoadLightsAction, LoadLightsSuccessAction, LoadLightsFailAction} from "./light.actions";
import {Light} from "./light.model";
import {Bridge} from "../bridge/bridge.model";

@Injectable()
export class LightEffects {

    constructor(private actions$: Actions, private hueService: HueService) {
    }

    @Effect()
    loadLights$: Observable<Action> = this.actions$
        .ofType(LightActionTypes.LOAD_LIGHTS)
        .map((action: LoadLightsAction) => action.payload)
        .mergeMap((bridge: Bridge) =>
            this.hueService.loadLights(bridge.internalipaddress)
                .map((lights: Light[]) => new LoadLightsSuccessAction(lights))
                .catch((res: Response) => of(new LoadLightsFailAction(res)))
        );
}


