import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  title: string;
  description: string;
  constructor() { 
    this.title = "Model-View-Controller";
    this.description = `Model–view–controller (MVC) is a software architectural pattern that divides a given application into three interconnected parts. This is done to separate internal representations of information from the ways information is presented to, and accepted from, the user.
    `
  }

}