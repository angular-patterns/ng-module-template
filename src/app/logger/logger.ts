import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Logger {
    constructor(@Inject(HttpClient) private http:HttpClient) {
        
    }

    logError(message: string, stack: string, properties: { [key: string]: string }){
        var propertyString = JSON.stringify(properties);
        var o = this.http.post('http://localhost:5000/api/v1/errors',{ message: message, stack: stack, properties: propertyString});
        o.subscribe(t=> {

        },(error) => {
            console.error(error);
        }, () => {

        });
        

           
    }
}