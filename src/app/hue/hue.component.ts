import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Bridge} from "../models/bridge.model";
import {Light} from "../models/light.model";

@Component({
    selector: 'jh-hue',
    templateUrl: './hue.component.html'
})
export class HueComponent  {

    @Input()
    bridges: Bridge[];
    @Input()
    lights: Light[];
    @Output()
    bridgeSelected: EventEmitter<Bridge> = new EventEmitter();
}
