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
import {HueActionTypes, BridgeSearchSuccessAction, BridgeSearchFailAction, BridgeSearchAction} from "./hue.actions";
import {HueService} from "./hue.service";
import {Bridge} from "../models/bridge.model";
import {Response} from "@angular/http";
import {defer} from "rxjs/observable/defer";

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
}


