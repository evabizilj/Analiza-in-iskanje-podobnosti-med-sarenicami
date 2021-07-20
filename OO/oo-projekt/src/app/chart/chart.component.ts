import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['Rjava','Zeleno-rjava', 'Zelena', 'Sivo-zelena', 'Sivo-modra'],
            datasets: [{
                label: 'Število elementov',
                data: [128, 71, 26, 15, 8],
                backgroundColor: [
                    'rgba(148, 70, 22, 0.2)',
                    'rgba(112, 163, 41, 0.2)',
                    'rgba(87, 173, 43, 0.2)',
                    'rgba(87, 173, 151, 0.2)',
                    'rgba(154, 178, 181, 0.2)'
                ],
                borderColor: [
                    'rgba(148, 70, 22, 1)',
                    'rgba(125, 129, 44, 1)',
                    'rgba(87, 173, 43, 1)',
                    'rgba(87, 132, 123, 1)',
                    'rgba(152, 207, 214, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

}
