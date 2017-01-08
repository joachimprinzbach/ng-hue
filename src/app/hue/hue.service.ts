import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Light} from "./light/light.model";
import {Observable} from "rxjs";
import {LightState} from "./light/light-state.model";
import {Bridge} from "./bridge/bridge.model";

@Injectable()
export class HueService {

    username: string = 'WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa';
    mapFromObjToArray = (obj) => Object.keys(obj).map(key => obj[key]);
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
        let lightStateToUpdate: LightState = Object.assign({}, light.state);
        lightStateToUpdate.on = newState;
        lightStateToUpdate.transitiontime = 0;
        return this.http
        // TODO: currently hard coded id - use the one from the hashMap ;-)
            .put('http://' + this.selectedBridgeIp + '/api/' + this.username + '/lights/' + 6 + '/state', lightStateToUpdate)
            .map(response => response.json());
    }
}
