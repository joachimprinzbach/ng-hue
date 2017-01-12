import {Component, Input} from "@angular/core";
import {Group} from "./group.model";

@Component({
    selector: 'jh-groups',
    templateUrl: './groups.component.html'
})
export class GroupsComponent  {

    @Input()
    groups: Group[];
}
