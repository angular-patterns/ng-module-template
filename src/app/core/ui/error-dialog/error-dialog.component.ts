import { OnInit, Component, Input } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ErrorInfo } from "../../../error/index";

@Component({
    selector: 'modal-content',
    templateUrl:'error-dialog.component.html'
})

export class ErrorDialogComponent implements OnInit {
    @Input() error: ErrorInfo;
    constructor(public bsModalRef: BsModalRef) {}
    ngOnInit() {
        
     }
}
