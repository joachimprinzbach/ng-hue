import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Light} from "./light.model";

@Component({
    selector: 'jh-light',
    templateUrl: './light.component.html'
})
export class LightComponent  {

    @Input()
    light: Light;
    @Output()
    toggleLightOn: EventEmitter<any> = new EventEmitter();
}
