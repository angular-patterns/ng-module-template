import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';
import { LibConfig } from '../lib-config';
import { map } from 'rxjs/operators';
import { Section } from '../models/section.model';
import { Guid } from 'guid-typescript';

@Injectable({ providedIn: 'root'})
export class FormService {

  constructor(private config: LibConfig, private http: HttpClient) { }

  public getForm(code: string, effectiveDate: Date): Observable<Form> {
    return this.http.get<Form>(`${this.config.formServiceUrl}/forms/${code}/${effectiveDate}`);
  }

  public getSection(formId: Guid, versionNumber: Number, sectionCode: string): Observable<Section> {
    return this.http.get<Section>(`${this.config.formServiceUrl}/forms/${formId}/versions/${versionNumber}/sections/${sectionCode}`);
    
  }
}
