import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';

@Component({
    selector: 'message',
    templateUrl: 'message.component.html'
})

export class MessageComponent implements OnInit {
    messages: Observable<Message[]>;
    timer: Observable<number>;
    rotating: Observable<Message[]>;

    constructor(@Inject(HttpClient) private http: HttpClient) { 
        const url = `${process.env.MESSAGE_URL}`;
        this.messages = Observable.timer(0,10000).switchMap(t=> this.http.get<Message[]>(url));
        this.timer = Observable.timer(0,3000);

        this.rotating = Observable.combineLatest(this.messages, this.timer).map(arr=> {
            var messages = arr[0];
            if (messages.length <= 5)
                return messages;

            var index = arr[1] % messages.length;
            var sliced = messages.slice(index);
            for (var i = 0; i < index; ++i) {
                sliced.push(messages[i]);
            }
            return sliced;

        }).map(t=> {
            if (t.length <= 5)
                return t;
            else  
                return t.slice(0, 5);
        });


       
    }

    ngOnInit() { }
}