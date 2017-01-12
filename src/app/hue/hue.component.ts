import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Bridge} from "./bridge/bridge.model";
import {Light} from "./light/light.model";
import {Group} from "./group/group.model";

@Component({
    selector: 'jh-hue',
    templateUrl: './hue.component.html',
    styleUrls: ['./hue.component.scss']
})
export class HueComponent  {

    @Input()
    bridges: Bridge[];
    @Input()
    lights: Light[];
    @Input()
    groups: Group[];
    @Output()
    bridgeSelected: EventEmitter<Bridge> = new EventEmitter();
    @Output()
    toggleLightOn: EventEmitter<any> = new EventEmitter();
}
