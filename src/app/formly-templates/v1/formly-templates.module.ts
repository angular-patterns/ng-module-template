import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyTemplatesRoutingModule  } from './formly-templates-routing.module';
import { RenderComponent } from './render/render.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { ClassicDatePickerComponent } from './components/classic-date-picker/classic-date-picker.component';
import { ClassicYearMonthPickerComponent } from './components/classic-year-month-picker/classic-year-month-picker.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { HighSchoolSearchComponent } from './components/high-school-search/high-school-search.component';
import { InstitutionSearchComponent } from './components/institution-search/institution-search.component';
import { KendoDatePickerComponent } from './components/kendo-date-picker/kendo-date-picker.component';
import { ProgramOfStudyComponent } from './components/program-of-study/program-of-study.component';
import { LibConfig } from './lib-config';
import { ProvStateCountrySelectComponent } from './components/prov-state-country-select/prov-state-country-select.component';
import { ReferenceDataSelectComponent } from './components/reference-data-select/reference-data-select.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SinInputComponent } from './components/sin-input/sin-input.component';
import { YesNoSelectComponent } from './components/yes-no-select/yes-no-select.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormlyTemplatesRoutingModule,
    FormlyModule.forChild({
      types: [
        { name: 'field-input', component: FieldInputComponent },
        { name: 'classic-date-picker', component: ClassicDatePickerComponent },
        { name: 'classic-year-month-picker', component: ClassicYearMonthPickerComponent },
        { name: 'high-school-search', component: HighSchoolSearchComponent },
        { name: 'institution-search', component: InstitutionSearchComponent },
        { name: 'kendo-date-picker', component: KendoDatePickerComponent },
        { name: 'program-of-study', component: ProgramOfStudyComponent },
        { name: 'prov-state-country-select', component: ProvStateCountrySelectComponent },
        { name: 'reference-data-select', component: ReferenceDataSelectComponent },
        { name: 'section-title', component: SectionTitleComponent },
        { name: 'sin-input', component: SinInputComponent },
        { name: 'yes-no-select', component: YesNoSelectComponent }
      ],
    }),
    ServicesModule
  ],
  declarations: [
    RenderComponent
  ],
  exports: [
    ComponentsModule,
    RenderComponent
  ]
})
export class FormlyTemplatesModule {
  static forRoot(url: LibConfig): ModuleWithProviders {
    return {
        ngModule: FormlyTemplatesModule,
        providers: [
            { provide: LibConfig, useValue: url }
        ]
    };
}
 }
