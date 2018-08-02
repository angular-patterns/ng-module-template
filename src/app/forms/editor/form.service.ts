import { Injectable } from "@angular/core";
import { Form, Section } from "./models/form.model";
import { Observable, Subject } from "rxjs";


import { FormGroup } from "@angular/forms";

import { Widget, IdService, WidgetRef, WidgetFactory } from "../../../lib/dynamic";
import { OptionsFactory } from "../../../lib/dynamic-options";



@Injectable()
export class FormService {
    store:  {
        form: Form;
        formGroup: FormGroup;
        currentSection: Section;
        data: { [key: string]: any};
    }
    events:  {
        init$: Observable<Form>,
        form: {
            modelChanged$: Observable<FormGroup>;
        },
        section: {
            added$: Observable<Section>;
            current$: Observable<Section>;
        },
        widget: {
            added$: Observable<Widget>;
            removed$: Observable<Widget>;
        },
        options: {
            updated$: Observable<any>;
        }


    }
    initSubject: Subject<Form>;
    addedSectionSubject: Subject<Section>;
    currentSectionSubject: Subject<Section>;
    addedWidgetSubject: Subject<Widget>;
    updatedOptionsSubject: Subject<any>;
    removedWidgetSubject: Subject<Widget>;
    modelChangedSubject: Subject<FormGroup>;

    constructor(private widgetFactory: WidgetFactory, private optionsFactory: OptionsFactory, private idService: IdService) {
        this.initSubject = new Subject<Form>();
        this.addedSectionSubject = new Subject<Section>();
        this.currentSectionSubject = new Subject<Section>();
        this.addedWidgetSubject = new Subject<Widget>();
        this.updatedOptionsSubject = new Subject<any>();
        this.removedWidgetSubject = new Subject<Widget>();
        this.modelChangedSubject = new Subject<FormGroup>();
        this.store = {
            form: null,
            formGroup: null,
            currentSection: null,
            data: null
        }
        this.events = {
            init$: this.initSubject.asObservable(),
            form: {
                modelChanged$: this.modelChangedSubject.asObservable()
            },
            section: {
                added$: this.addedSectionSubject.asObservable(),
                current$: this.currentSectionSubject.asObservable()
            },
            widget: {
                added$: this.addedWidgetSubject.asObservable(),
                removed$: this.removedWidgetSubject.asObservable()
            },
            options: {
                updated$: this.updatedOptionsSubject.asObservable(),
                
            }
        }
    }

    initialize(form:Form) {
        this.store.form = form;
        this.store.data = {};
        this.store.formGroup = new FormGroup({});
        this.idService.init(form.idSpace);
        this.initSubject.next(this.store.form);
        return this.store.formGroup;
    }

    addSection(title: string) {
        const section = { title: title, widgets: []};
        this.store.form.sections.push(section);
        this.addedSectionSubject.next(section);
        this.setCurrentSection(section);
    }

    setCurrentSection(section: Section){
        this.store.currentSection = section;
        this.currentSectionSubject.next(section);
    }
    addWidget(widgetRef: WidgetRef) {
        var options = this.optionsFactory.createOptions(widgetRef.name);
        var widget = this.widgetFactory.createWidget(widgetRef, options);
        this.store.currentSection.widgets.push(widget);
        this.addedWidgetSubject.next(widget);
    }


    updateOptions(prevOptions: any, newOptions: any) {
        this.store.form.sections.forEach(t=> {
            var i = t.widgets.findIndex(t=>t.options == prevOptions);
            if (i >= 0) {
                
                t.widgets[i].options = newOptions;
                this.updatedOptionsSubject.next(newOptions);
                if (prevOptions.model && prevOptions.model != newOptions.model) {
                    this.store.formGroup = new FormGroup({});
                    this.modelChangedSubject.next(this.store.formGroup);
                }
            }
        });
    }
    removeWidget(options: any) {
        var widgets = this.store.form.sections.map(t=>t.widgets).reduce((p,c)=> p.concat(c),[]).filter(t=>t.options == options);

        widgets.forEach(t=> {
            this.store.form.sections.forEach(x=> {
                let i = x.widgets.indexOf(t);
                if (i >= 0) {
                    x.widgets.splice(i, 1);
                    this.removedWidgetSubject.next(t);
                }
            });
        });
    }


}