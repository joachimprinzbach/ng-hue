import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HueService {

  username: string = 'WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa';
  bridgeIp: string;
  constructor(private http: Http) {
  }

  findBridges() {
    return this.http
      .get('https://www.meethue.com/api/nupnp')
      .map(response => response.json())
      .map(bridges => bridges.map(bridge => bridge.internalipaddress))
      .catch(this.handleError)
  }

  getLights() {
    return this.http
      .get('http://192.168.1.174/api/WBgiileJ7lyApsgJ3OJxdH7Zd6Ioe9VlxfODLgVa/lights')
      .map(res => res.json());
  }

  private handleError(error: Response): Observable<{}> {
    console.error(error)
    return Observable.throw(error.json() || 'Server error')
  }


}
