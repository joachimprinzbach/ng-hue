import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Light} from "./light/light.model";
import {Observable} from "rxjs";
import {LightState} from "./light/light-state.model";
import {Bridge} from "./bridge/bridge.model";

@Injectable()
export class HueService {

    username: string = 'WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa';
    mapFromObjToArray = (obj) => Object.keys(obj).map(key => {
        let newObj = obj[key];
        newObj.id = key;
        return newObj;
    })
    selectedBridgeIp: string;

    constructor(private http: Http) {
    }

    findBridges(): Observable<Bridge[]> {
        return this.http
            .get('https://www.meethue.com/api/nupnp')
            .map(response => response.json());
    }

    loadLights(bridgeIp: string): Observable<Light[]> {
        this.selectedBridgeIp = bridgeIp;
        return this.http
            .get('http://' + bridgeIp + '/api/' + this.username + '/lights')
            .map(response => response.json())
            .map(this.mapFromObjToArray);
    }

    toggleLight(light: Light, newState: boolean): Observable<Light> {
        let lightStateToUpdate: LightState = {
            on: newState,
            transitiontime: 0
        };
        return this.http
            .put('http://' + this.selectedBridgeIp + '/api/' + this.username + '/lights/' + light.id + '/state', lightStateToUpdate)
            .map(response => response.json());
    }
}
