import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HighSchool } from '../models/high-school.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { LibConfig } from '../lib-config';

@Injectable({ providedIn: 'root'})
export class HighSchoolSearchService {

    private baseURL: string;

    constructor(@Optional() public config: LibConfig, private http: HttpClient) {
        if (config) { this.baseURL = config.highSchoolSearchServiceUrl; }
     }

    getAllActive(): Observable<HighSchool[]> {
        const url = `${this.baseURL}/?activeOnly=true`;
        return this.http.get<HighSchool[]>(url);
    }

}

