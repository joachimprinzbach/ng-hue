import {Component, Input} from "@angular/core";
import {Bridge} from "./bridge.model";

@Component({
    selector: 'jh-bridge',
    templateUrl: './bridge.component.html'
})
export class BridgeComponent  {

    @Input()
    bridge: Bridge;
}
