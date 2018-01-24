import { OnInit, Component, Input } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ErrorInfo } from "../../error-handler/shared/error.model";

@Component({
    selector: 'modal-content',
    templateUrl: 'error-dev.component.html'
})

export class ErrorDevComponent implements OnInit {
    @Input() error: ErrorInfo;

    constructor(public bsModalRef: BsModalRef) {}
    ngOnInit() {
        
     }
}
