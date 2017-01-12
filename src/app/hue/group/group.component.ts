import {Component, Input} from "@angular/core";
import {Group} from "./group.model";

@Component({
    selector: 'jh-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent  {

    @Input()
    group: Group;

    getIcon(group: Group) {
        let model = group.class;
        if (model === 'Living room') {
            return './../../../assets/img/hue/rooms/living.png';
        }
        return '';
    }
}
