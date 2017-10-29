import { Component, Input } from '@angular/core';
import { Widget } from "../widget/widget.model";


@Component({
  selector: 'app',
  template: `
  <widget class="wip" [widget]="wip">
  <div [innerHTML]="wip.description"></div>
  <br />
  <table class="table table-hover">
      <thead>
          <tr>
              <td></td>                            
              <td>Funding Year</td>
              <td>Application Type</td>
              <td>Last Accessed Date</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div>
                      <button type="button" class="btn btn-primary btn-xs">Edit <span class="glyphicon glyphicon-pencil"></span></button>
                      <button type="button" class="btn btn-danger btn-xs">Delete <span class="glyphicon glyphicon-remove"></span></button>
                  </div>
              </td>
              <td>2015/2016</td>
              <td>Full Time</td>
              <td>Jun 15, 2016</td>
          </tr>
          <tr>
              <td>
                  <button type="button" class="btn btn-primary btn-xs">Edit <span class="glyphicon glyphicon-pencil"></span></button>
                  <button type="button" class="btn btn-danger btn-xs">Delete <span class="glyphicon glyphicon-remove"></span></button>
              </td>
              <td>2016/2017</td>
              <td>Full Time</td>
              <td>Jul 1, 2017</td>
          </tr>
      </tbody>
  </table>
</widget>
  `
})
export class AppWidget { 
    wip: Widget;    

    constructor() {
        this.wip =      {
            "title": "Apply for Post-Secondary Funding",
            "icon": "glyphicon-usd",
            "description": "\n                <p>Begin a new application for Full-Time student aid.</p>\n                <p>\n                    Apply for2016-2017 (classes start between01-Aug-2016 and31-Jul-2017)\n                    \n                </p>\n                <p>\n                    You cannot begin a new application if you currently have an existing work-in-progress application for the same year. If you have a work-in-progress application, complete it or delete it.\n                </p>\n\n        ",
            "points": [],
            "category": "center",
            "module": "/funding",
            "custom": false
        };
    }
    
}
