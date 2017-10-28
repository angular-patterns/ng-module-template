import { Type } from "@angular/core";

export interface Widget {
    key: string;
    type: Type<any>;
}