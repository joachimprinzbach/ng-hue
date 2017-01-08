import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Bridge} from "./bridge.model";

@Component({
    selector: 'jh-bridges',
    templateUrl: './bridges.component.html'
})
export class BridgesComponent  {

    @Input()
    bridges: Bridge[];
    @Output()
    bridgeSelected: EventEmitter<Bridge> = new EventEmitter();
}
