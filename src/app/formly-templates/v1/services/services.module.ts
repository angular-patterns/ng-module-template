import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

import { FormlyUtilService } from './formly-utils.service';
import { HighSchoolNotFoundService } from './high-school-not-found.service';
import { HighSchoolSearchService } from './high-school-search.service';
import { ReferenceDataService } from './reference-data.service';
import { ScholarshipsExternalValidationService } from './scholarships-external-validation.service';
import {InstitutionService} from './institution-search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    FormlyUtilService,
    HighSchoolNotFoundService,
    HighSchoolSearchService,
    ReferenceDataService,
    ScholarshipsExternalValidationService,
    InstitutionService
  ]
})
export class ServicesModule { }
