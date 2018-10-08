import { Component, OnInit, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Subscription } from 'rxjs';
import { ReferenceDataService } from '../../services/reference-data.service';
import { NameValue } from '../../models/name-value.model';
import { HighSchoolNotFoundService } from '../../services/high-school-not-found.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'tmp-app-prov-state-country-select',
    templateUrl: './prov-state-country-select.component.html',
    styleUrls: [ './prov-state-country-select.component.css' ],
    providers: [ReferenceDataService]
})

export class ProvStateCountrySelectComponent extends FieldType implements OnInit, OnDestroy {

    canadaId = 'd2c7f931-49fd-4d2d-88ee-9b11010689bf'; // reference data item ID
    usaId = 'dddd107b-8dbc-4119-aabb-9b11010689db'; // reference data item ID

    provStates: Array<NameValue> = [];
    provinces: Array<NameValue> = [];
    states: Array<NameValue> = [];
    countries: Array<NameValue> = [];
    country: string;
    provinceState: string;

    highSchoolNotFoundSubscription: Subscription;

    constructor(private referenceDataService: ReferenceDataService, private highSchoolNotFoundService: HighSchoolNotFoundService) {
        super();
        this.highSchoolNotFoundSubscription = this.highSchoolNotFoundService.getMessage().subscribe(hs => {
            this.resetProvState();
            this.country = '';
            this.provinceState = '';
        });
    }

    ngOnDestroy() {
        this.highSchoolNotFoundSubscription.unsubscribe();
    }

    ngOnInit() {

        forkJoin(
            this.referenceDataService.getByCode('Province'),
            this.referenceDataService.getByCode('State'),
            this.referenceDataService.getByCode('Country')
        )
        .subscribe(([p, s, c]) => {
            this.provinces = p;
            this.states = s;
            this.provStates = this.provStates.concat(this.provinces).concat(this.states);
            this.countries = c;
        });
    }

    onCountryChange($event) {
        this.country = $event.target.value;
        if (this.country !== undefined && this.country.length > 0) {
            if (this.country === this.canadaId) {
                this.provStates = this.provinces;
                if (!this.inCanada()) {
                    this.model[this.to.keys.provStateId] = null;
                }
            } else if (this.country === this.usaId) {
                this.provStates = this.states;
                if (!this.inUsa()) {
                    this.model[this.to.keys.provStateId] = null;
                }
            } else {
                this.provStates = [];
                this.model[this.to.keys.provStateId] = null;
            }
        } else {
            this.resetProvState();
        }

        if (this.country === undefined || this.country.length === 0) {
            this.model[this.to.keys.countryId] = null;
        } else {
            this.model[this.to.keys.countryId] = this.country;
        }
    }

    onProvinceStateChange($event) {

        this.provinceState = $event.target.value;
        if (this.provinceState === undefined || this.provinceState.length === 0) {
            this.model[this.to.keys.provStateId] = null;
        } else {
            this.model[this.to.keys.provStateId] = this.provinceState;
        }
        this.setCountry();
    }

    setCountry() {
        if (this.inCanada()) {
            this.country = this.canadaId;
            this.provStates = this.provinces;
            this.model[this.to.keys.countryId] = this.country;
        } else if (this.inUsa()) {
            this.country = this.usaId;
            this.provStates = this.states;
            this.model[this.to.keys.countryId] = this.country;
        } else {
            this.country = null;
            this.model[this.to.keys.countryId] = this.country;
        }
    }

    resetProvState() {
        this.provStates = [];
        this.provStates = this.provStates.concat(this.provinces).concat(this.states);
    }

    inCanada() {
        let inCanada = false;
        this.provinces.forEach( p => {
            if (p.value.toString() === this.provinceState) { inCanada = true; }
        });
        return inCanada;
    }

    inUsa() {
        let inUsa = false;
        this.states.forEach( p => {
            if (p.value.toString() === this.provinceState) { inUsa = true; }
        });
        return inUsa;
    }

    isNotCanadaOrUsa() {
        if (this.country === undefined) { return false; }
        if (this.country === null) { return false; }
        if (this.country === this.canadaId) { return false; }
        if (this.country === this.usaId) { return false; }
        if (this.country.length === 0) { return false; }
        return true;
    }

}
