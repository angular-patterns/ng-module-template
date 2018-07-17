import { Injectable } from "@angular/core";
import { Form, Section } from "./models/form.model";
import { Observable, Subject } from "rxjs";
import { WidgetRef, Widget } from "../../dynamic/models/widget.model";

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

    constructor() {
        this.initSubject = new Subject<Form>();
        this.addedSectionSubject = new Subject<Section>();
        this.currentSectionSubject = new Subject<Section>();
        this.addedWidgetSubject = new Subject<Widget>();
        this.updatedOptionsSubject = new Subject<any>();

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
                added$: this.addedWidgetSubject.asObservable()
            },
            options: {
                updated$: this.updatedOptionsSubject.asObservable()
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
        var widget = this.createWidget(widgetRef);
        this.store.currentSection.widgets.push(widget);
        this.addedWidgetSubject.next(widget);
    }

    createWidget(widgetRef: WidgetRef) {
        var widget = new Widget();
        widget.component = widgetRef.name;
        widget.options = widgetRef.defaultOptions;
        return widget;
    }
    updateOptions(options: any) {
        var widgets = this.store.form.sections.map(t=>t.widgets).reduce((p,c)=> p.concat(c),[]).filter(t=>t.options == options);
        widgets.forEach(t=> {
            t.options = Object.assign({}, t.options);
        });
    }

}