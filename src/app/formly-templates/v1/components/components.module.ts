import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FieldInputComponent } from './field-input/field-input.component';
import { ClassicDatePickerComponent } from './classic-date-picker/classic-date-picker.component';
import { ClassicYearMonthPickerComponent } from './classic-year-month-picker/classic-year-month-picker.component';
import { HighSchoolSearchComponent } from './high-school-search/high-school-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InstitutionSearchComponent } from './institution-search/institution-search.component';
import { KendoDatePickerComponent } from './kendo-date-picker/kendo-date-picker.component';

import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { ProgramOfStudyComponent } from './program-of-study/program-of-study.component';
import { ProvStateCountrySelectComponent } from './prov-state-country-select/prov-state-country-select.component';
import { ReferenceDataSelectComponent } from './reference-data-select/reference-data-select.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SinInputComponent } from './sin-input/sin-input.component';
import { YesNoSelectComponent } from './yes-no-select/yes-no-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    NgSelectModule,
    DatePickerModule
  ],
  declarations: [
    FieldInputComponent,
    ClassicDatePickerComponent,
    ClassicYearMonthPickerComponent,
    HighSchoolSearchComponent,
    InstitutionSearchComponent,
    KendoDatePickerComponent,
    ProgramOfStudyComponent,
    ProvStateCountrySelectComponent,
    ReferenceDataSelectComponent,
    SectionTitleComponent,
    SinInputComponent,
    YesNoSelectComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FieldInputComponent,
    ClassicDatePickerComponent,
    ClassicYearMonthPickerComponent,
    HighSchoolSearchComponent,
    InstitutionSearchComponent,
    KendoDatePickerComponent,
    ProgramOfStudyComponent,
    ProvStateCountrySelectComponent,
    ReferenceDataSelectComponent,
    SectionTitleComponent,
    SinInputComponent,
    YesNoSelectComponent
  ]
})
export class ComponentsModule { }
