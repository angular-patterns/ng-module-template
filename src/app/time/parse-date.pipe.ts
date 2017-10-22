import { PipeTransform, Pipe } from "@angular/core";
import * as moment from 'moment-es6';


@Pipe({
    name: 'parseDate',
    pure: true 
})
export class ParseDatePipe implements PipeTransform {
    transform(date: Date, format: string) {
        return moment.default(date.toISOString()).format(format);
    }

}