import {Component, Input} from "@angular/core";
import {Light} from "./light.model";

@Component({
    selector: 'jh-lights',
    templateUrl: './lights.component.html'
})
export class LightsComponent  {

    @Input()
    lights: Light[];
}
