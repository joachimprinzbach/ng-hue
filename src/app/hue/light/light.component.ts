import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Light} from "./light.model";

@Component({
    selector: 'jh-light',
    templateUrl: './light.component.html',
    styleUrls: ['./light.component.scss']
})
export class LightComponent  {

    @Input()
    light: Light;
    @Output()
    toggleLightOn: EventEmitter<any> = new EventEmitter();

    getIcon(light) {
        let model = light.modelid;
        if (model === 'LLC011') {
            return './../../../assets/img/hue/products/bloom.png';
        } else if (model === 'LLC010') {
            return './../../../assets/img/hue/products/iris.png';
        } else if (model === 'LST002') {
            return './../../../assets/img/hue/products/lightstrip.png';
        } else if (model === 'LCT007') {
            return './../../../assets/img/hue/products/white_and_color_e27_b22.png';
        }
        return '';
    }
}
