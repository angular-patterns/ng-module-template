import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError, of } from 'rxjs';
import { LibConfig } from '../lib-config';
import { LearnerSearchResult } from '../models/learner-search-result';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipsExternalValidationService {

  baseUrl: string;

  constructor(@Optional() public config: LibConfig, private http: HttpClient) {
    if (config) { this.baseUrl = config.learnerServiceUrl; }
  }

  getBySIN(sin: number): Observable<LearnerSearchResult> {
    const url = `${this.baseUrl}/sin/${sin}`;
    // tslint:disable-next-line:max-line-length
    return this.http.get<LearnerSearchResult>(url, {withCredentials: true }).pipe(catchError((err: Response) => this.handleError(err)));
  }

  handleError(error: Response): Observable<LearnerSearchResult> {
    if (error.status === 404) {
      return of(new LearnerSearchResult());
    }

  }




}



