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
import {Bridge} from "../bridge/bridge.model";
import {GroupActionTypes, LoadGroupsAction, LoadGroupsSuccessAction, LoadGroupsFailAction} from "./group.actions";
import {Group} from "./group.model";

@Injectable()
export class GroupEffects {

    constructor(private actions$: Actions, private hueService: HueService) {
    }

    @Effect()
    loadLights$: Observable<Action> = this.actions$
        .ofType(GroupActionTypes.LOAD_GROUPS)
        .map((action: LoadGroupsAction) => action.payload)
        .mergeMap((bridge: Bridge) =>
            this.hueService.loadGroups(bridge.internalipaddress)
                .map((groups: Group[]) => new LoadGroupsSuccessAction(groups))
                .catch((res: Response) => of(new LoadGroupsFailAction(res)))
        );

}


