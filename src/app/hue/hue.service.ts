import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HueService {

    constructor(private http: Http) {
    }

    findBridges() {
        return this.http
            .get('https://www.meethue.com/api/nupnp')
            .map(response => response.json());
    }

    loadLights(bridgeIp: string) {
        return this.http
            .get('http://' + bridgeIp + '/api/WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa/lights')
            .map(response => response.json())
            .map(resObj => Object.keys(resObj).map(key => resObj[key]));
    }
}
