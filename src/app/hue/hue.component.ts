import {Component, Input} from "@angular/core";
import {Bridge} from "../models/bridge.model";

@Component({
    selector: 'jh-hue',
    templateUrl: './hue.component.html'
})
export class HueComponent  {

    @Input()
    bridges: Bridge[];
}
