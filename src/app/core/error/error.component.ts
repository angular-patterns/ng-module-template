import { OnInit, Component, Input } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ErrorModel } from "../../error-handler/shared/error.model";

@Component({
    selector: 'modal-content',
    templateUrl:'error.component.html'
})

export class ErrorComponent implements OnInit {
    @Input() error: ErrorModel;
    constructor(public bsModalRef: BsModalRef) {}
    ngOnInit() {
        
     }
}
