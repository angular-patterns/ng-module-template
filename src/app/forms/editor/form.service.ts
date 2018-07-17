import { Injectable } from "@angular/core";
import { Form, Section } from "./models/form.model";
import { Observable, Subject } from "rxjs";
import { WidgetRef, Widget } from "../../dynamic/models/widget.model";
import { WidgetFactory } from "../../dynamic/services/widget.factory";

@Injectable()
export class FormService {
    store:  {
        form: Form;
        currentSection: Section;
    }
    events:  {
        init$: Observable<Form>,
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

    constructor(private widgetFactory: WidgetFactory) {
        this.initSubject = new Subject<Form>();
        this.addedSectionSubject = new Subject<Section>();
        this.currentSectionSubject = new Subject<Section>();
        this.addedWidgetSubject = new Subject<Widget>();
        this.updatedOptionsSubject = new Subject<any>();
        this.removedWidgetSubject = new Subject<Widget>();

        this.store = {
            form: null,
            currentSection: null
        }
        this.events = {
            init$: this.initSubject.asObservable(),
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
        this.initSubject.next(this.store.form);
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
        var widget = this.widgetFactory.createWidget(widgetRef);
        this.store.currentSection.widgets.push(widget);
        this.addedWidgetSubject.next(widget);
    }


    updateOptions(options: any) {
        var widgets = this.store.form.sections.map(t=>t.widgets).reduce((p,c)=> p.concat(c),[]).filter(t=>t.options == options);
        widgets.forEach(t=> {
            t.options = Object.assign({}, t.options);
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