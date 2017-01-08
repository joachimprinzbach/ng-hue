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
import {
    LightActionTypes, LoadLightsAction, LoadLightsSuccessAction, LoadLightsFailAction,
    ToggleLightOnAction, ToggleLightOnSuccessAction, ToggleLightOnFailAction, ToggleLightOffAction,
    ToggleLightOffSuccessAction, ToggleLightOffFailAction
} from "./light.actions";
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

    @Effect()
    turnLightOn$: Observable<Action> = this.actions$
        .ofType(LightActionTypes.TOGGLE_LIGHT_ON)
        .map((action: ToggleLightOnAction) => action.payload)
        .mergeMap((light: Light) =>
            this.hueService.toggleLight(light, true)
                .map((newLight: Light) => new ToggleLightOnSuccessAction(newLight))
                .catch((res: Response) => of(new ToggleLightOnFailAction(res)))
        );

    @Effect()
    turnLightOff$: Observable<Action> = this.actions$
        .ofType(LightActionTypes.TOGGLE_LIGHT_OFF)
        .map((action: ToggleLightOffAction) => action.payload)
        .mergeMap((light: Light) =>
            this.hueService.toggleLight(light, false)
                .map((newLight: Light) => new ToggleLightOffSuccessAction(newLight))
                .catch((res: Response) => of(new ToggleLightOffFailAction(res)))
        );
}


