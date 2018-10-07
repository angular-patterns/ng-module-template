import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';
import { LibConfig } from '../lib-config';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class FormService {

  constructor(private config: LibConfig, private http: HttpClient) { }

  public get(code: string, effectiveDate: Date): Observable<Form> {
    return this.http.get<Form>(`${this.config.formServiceUrl}/${code}/${effectiveDate}`);
  }
}
