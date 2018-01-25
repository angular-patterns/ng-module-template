import { OnInit, Component, Input } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ErrorInfo } from "../../../error/index";

const production = process.env.Environment === 'Production';

@Component({
    selector: 'modal-content',
    templateUrl:'error-dialog.component.html'
})

export class ErrorDialogComponent implements OnInit {
    @Input() error: ErrorInfo;
    production: boolean;
    constructor(public bsModalRef: BsModalRef) {
        this.production = production;
    }
    ngOnInit() {
        
     }
}
