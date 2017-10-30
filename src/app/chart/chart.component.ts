import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements AfterViewInit {
  data: any;
  constructor() {
    this.data = {
      chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series;
                setInterval(function () {
                    for (var i = 0; i < 1; ++i) {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random() * 100000;
                    series[i].addPoint(Math.floor(y), true, true);
                    }
                }, 3000);
            }
        }
    },      
            title: {
              text: 'Solar Employment Growth by Sector, 2010-2016'
            },
      
            subtitle: {
              text: 'Source: thesolarfoundation.com'
            },
      
            yAxis: {
              title: {
                text: 'Number of Employees'
              }
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
            },
      
            plotOptions: {
              series: {
                label: {
                  connectorAllowed: false
                },
                pointStart: 2010
              }
            },
      
            series: [{
              name: 'Installation',
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }],
      
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                  },
                  
                }
              }]
            }
        
          };
  }
  ngAfterViewInit() {
    
    Highcharts.chart('container', this.data);
  }

  onclick() {
    this.data.series[0].data.push(4000);
    Highcharts.chart('container', this.data);
  }
}
   
