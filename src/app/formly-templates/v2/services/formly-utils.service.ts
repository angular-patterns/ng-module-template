import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FormlyUtilService {

    addUIControlToModel(model: any, property: string, val: any) {
        if (model !== undefined) {
            if (model['ui'] === undefined) {
                model['ui'] = {};
            }
            model['ui'][property] = val;
        }
    }

    convertToJSDate(val: string) {
        const date = val.split('-', 3); // services return date as strings with format yyyy-mm-dd
        const year = parseInt(date[0], 10);
        const month = (parseInt(date[1], 10) - 1);
        const day = parseInt(date[2], 10);
        return new Date(year, month, day);
    }

}
