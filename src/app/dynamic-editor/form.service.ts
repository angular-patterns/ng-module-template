import { Injectable } from "@angular/core";
import { Form, Section } from "./models/form.model";
import { Observable, Subject } from "rxjs";

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
        }

    }
    initSubject: Subject<Form>;
    addedSectionSubject: Subject<Section>;
    currentSectionSubject: Subject<Section>;
    constructor() {
        this.initSubject = new Subject<Form>();
        this.addedSectionSubject = new Subject<Section>();
        this.currentSectionSubject = new Subject<Section>();
        this.store = {
            form: null,
            currentSection: null
        }
        this.events = {
            init$: this.initSubject.asObservable(),
            section: {
                added$: this.addedSectionSubject.asObservable(),
                current$: this.currentSectionSubject.asObservable()
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

}