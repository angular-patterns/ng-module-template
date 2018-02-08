import { NgModule } from '@angular/core';

import { TimeComponent } from './time.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ TimeComponent ],
    declarations: [TimeComponent],
    providers: [],
})
export class TimeModule { }
