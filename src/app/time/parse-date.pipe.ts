import { PipeTransform, Pipe } from "@angular/core";
declare var moment: any;

@Pipe({
    name: 'parseDate',
    pure: true 
})
export class ParseDatePipe implements PipeTransform {
    transform(date: Date, format: string) {
        return moment(date.toISOString()).format(format);
    }

}