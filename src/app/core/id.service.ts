import { Injectable } from "@angular/core";

@Injectable()
export class IdService {
    space: {[name: string]: number};
    constructor() {
        this.space = {};
    }
    init(space: {[name: string]: number}) {
        this.space = space;
    }
    newId(name: string) {
        if (!this.space[name]) {
            this.space[name] = 0;
        }
        return `${name}${++this.space[name]}`;
    }
}