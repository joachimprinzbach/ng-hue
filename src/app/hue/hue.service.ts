import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class HueService {

    username: string = 'WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa';
    mapFromObjToArray = (obj) => Object.keys(obj).map(key => obj[key]);

    constructor(private http: Http) {
    }

    findBridges() {
        return this.http
            .get('https://www.meethue.com/api/nupnp')
            .map(response => response.json());
    }

    loadLights(bridgeIp: string) {
        return this.http
            .get('http://' + bridgeIp + '/api/' + this.username + '/lights')
            .map(response => response.json())
            .map(this.mapFromObjToArray);
    }
}
