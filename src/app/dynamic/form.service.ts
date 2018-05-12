import { Injectable, Inject } from "@angular/core";
import { Config, ConfigToken } from "./shared/config.model";
import { WidgetType, WidgetRef } from "./shared/widget-ref.model";
import { Form } from "./shared/form.model";
import { Section } from "./shared/section.model";
import { Layout } from "./shared/layout.model";
import { Widget, Validate } from "./shared/widget.model";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import 'rxjs/add/operator/do';
import { Subject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { SyncValidators } from "../validators/sync/sync.validators";

@Injectable()
export class FormService {
    static id: number = 0;
    rootFormGroup: FormGroup;
    parentFormGroup: FormGroup;
    config: Config;
    removeWidgetSubject: Subject<Widget>;
    removeWidget$: Observable<Widget>;
    updateWidgetSubject: Subject<Widget>;
    updateWidget$: Observable<Widget>;
    constructor( @Inject(ConfigToken) config: Config) {

        this.config = config;
        this.removeWidgetSubject = new Subject<Widget>();
        this.removeWidget$ = this.removeWidgetSubject.asObservable();

        this.updateWidgetSubject = new Subject<Widget>();
        this.updateWidget$ = this.updateWidgetSubject.asObservable();
    }
    static generateId(key:string) {
        return `${key}${++FormService.id}`;
    }

    getWidgetRef(key: string, type: WidgetType) {
        let widget = this.config.widgets.filter(t=>t.type == type).find(t => t.key === key);
        if (widget == null)
            throw new Error(`Could not find widget ${key} of type ${type}`);
        return widget;
    }
    getAllWidgetRefs() {
        return this.config.widgets;
    }
    
    createWidget(widgetRef: WidgetRef) {
        let validate = { sync: {}, async:{}};
        let widget: Widget = {  key: widgetRef.key, type: widgetRef.type, validate: validate, settings: widgetRef.settings.defaults };
        if (widgetRef.initialize) {
            widget.settings = widgetRef.initialize(widgetRef.settings.defaults);
        }
        return widget;
    }
    getLayout(key: string) {
        return this.config.layouts.find(t => t.key === key);
    }

    createFormControl(formGroup:FormGroup, widget: Widget) {
    
        let formControl = new FormControl('', this.getValidators(widget.validate.sync));
        formGroup.registerControl(widget.settings.id, formControl);
        return formControl;
    }
    getValidators(validators: { [key: string]: any}) {
      
    
        var tmp: any[] = Object.keys(validators);
        tmp = tmp.map(t=> SyncValidators[t](validators[t]));

        return tmp;
    }
    removeWidget(widget: Widget) {
        this.removeWidgetSubject.next(widget);
    }

    updateWidget(widget: Widget) {

        this.updateWidgetSubject.next(widget);
    }
    // getFormValue(form:Form) {
    //     let value = {};
    //     this.mapSections(value, form.sections);
    //     return value;
    // }
    // mapSections(obj, sections: Section[]) {
    //     sections.forEach(t=> {
    //         obj[t.scope] = {};
    //         this.mapLayouts(obj[t.scope], t.layouts);
    //     });
    // }

    // mapLayouts(obj, layouts: Layout[]) {
    //     layouts.forEach(t=> {
    //         obj[t.scope] = {};
    //         this.mapFields(obj[t.scope], t.widgets);
    //     })
    // }
    // mapFields(obj, widgets) {
    //     Object.keys(widgets).forEach(t=> {
    //         let w:Widget[] = <Widget[]>widgets[t];
    //         w.forEach(t=> {
                
    //             if (t.type == WidgetType.Field) {
    //                 obj[t.scope] = t.defaultValue || '';
    //             }
                
    //             if (t.type == WidgetType.Group) {
    //                 Object.assign(obj, t.defaultValue);
   
    //            }
    //         });
    //     })
    // }

    



}