import { Injectable, Inject } from "@angular/core";
import { optionsToken, Options } from "../models/options.model";


@Injectable()
export class OptionsLookupService {
    constructor(@Inject(optionsToken) private options: Options[]) {

    }
    getAll() {
        return this.options;
    }

    find(name: string) {
        return this.options.find(t=>t.name == name);
    }
    
}