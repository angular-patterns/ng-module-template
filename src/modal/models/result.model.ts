export class Result<T> {
    name: string;
    ok?: (value:T)=>void;
    cancel?: ()=>void;
    constructor(name: string) {
        this.name = name;
    }
    subscribe(ok?: (value:T)=>void, cancel?:()=>void) {
        this.ok = ok;
        this.cancel = cancel;
    }

    nextOk(value: T) {
        if (this.ok)
            this.ok(value);
    }

    nextCancel() {
        if (this.cancel)
            this.cancel();
    }

}