import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReferenceData } from '../models/reference-data.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NameValue } from '../models/name-value.model';
import { LibConfig } from '../lib-config';

@Injectable({ providedIn: 'root'})
export class ReferenceDataService {

    private baseURL: string;

    constructor(@Optional() public config: LibConfig, private http: HttpClient) {
        if (config) { this.baseURL = config.referenceDataUrl; }
     }

    getByCode(code: string): Observable<NameValue[]> {
        const url = `${this.baseURL}/?code=${code}`;
        console.log(url);
        return this.http.get<ReferenceData>(url).pipe(map(r=>this.toNameValue(r[0])));
    }

    toNameValue(refdata: ReferenceData): NameValue[] {
        const nameValue: Array<NameValue> = [];
        refdata.referenceDataItems.sort((s1, s2) => {
            if (s1.displayOrder === s2.displayOrder) { return 0; }
            if (s1.displayOrder < s2.displayOrder) { return -1; }
            return 1;
        });
        refdata.referenceDataItems.forEach((item) => {
            const nv = new NameValue();
            nv.name = item.displayValue;
            nv.value = item.id;
            nameValue.push(nv);
        });
        return nameValue;
    }

}
