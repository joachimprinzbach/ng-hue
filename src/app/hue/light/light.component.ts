import {Component, Input} from "@angular/core";
import {Light} from "./light.model";

@Component({
    selector: 'jh-light',
    templateUrl: './light.component.html'
})
export class LightComponent  {

    @Input()
    light: Light;
}
