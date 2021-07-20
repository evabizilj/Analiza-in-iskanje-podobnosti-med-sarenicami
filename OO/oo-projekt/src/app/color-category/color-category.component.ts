import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-color-category',
  templateUrl: './color-category.component.html',
  styleUrls: ['./color-category.component.css']
})


export class ColorCategoryComponent implements OnInit {


  slike: String[] = [
    "blue.png", //1
    "brown.png", //2
    "green-brown.png", //3
    "green.png", //4
    "grey-green.png", //5
    "blue_29.png",
    "brown_29.png",
    "green-brown.png",
    "green.png",
    "grey-green.png"
  ]

  LineChart!: Chart;

  ngOnInit(): void {

    this.LineChart = new Chart('myChart2', {
      type: 'doughnut',
      data: {
        datasets: [{
          label: '# of Votes',
          data: [43.19, 18.863, 9.815, 7.869, 6.685, 5.245 ,2.756, 2.685, 1.339],
          backgroundColor: [
            '#601800',
            '#481818',
            '#786048',
            '#C0A878',
            '#F0D8A8',
            '#907860',
            '#FFD8A8',
            '#F0C090',
            '#c07848'
          ],
          hoverOffset: 4
        }]
      }
    })
  }

  onClick(i: string): void {

    switch (i) {
      case '1':
        this.LineChart.destroy();
        this.LineChart = new Chart('myChart2', {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '# of Votes',
              data: [43.19, 18.863, 9.815, 7.869, 6.685, 5.245 ,2.756, 2.685, 1.339],
              backgroundColor: [
                '#601800',
                '#481818',
                '#786048',
                '#C0A878',
                '#F0D8A8',
                '#907860',
                '#FFD8A8',
                '#F0C090',
                '#c07848'
              ],
              hoverOffset: 4
            }]
          }
        })
        break;
      case '2':
        this.LineChart.destroy();
        this.LineChart = new Chart('myChart2', {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '# of Votes',
              data: [35.15, 30.09, 6.421, 4.917, 4.865, 4.281, 3.954, 3.722, 2.708],
              backgroundColor: [
                '#786048',
                '#907848',
                '#604830',
                '#ffd8a8',
                '#fff0c0',
                '#c09078',
                '#c0a890',
                '#f0c090',
                '#483030'
              ],
              hoverOffset: 4
            }]
          }
        })
        break;
      case '3':
        this.LineChart.destroy();
        this.LineChart = new Chart('myChart2', {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '# of Votes',
              data: [33.56, 24.21, 11.01, 9.457, 5.433, 4.737, 3.830, 2.562, 2.043],
              backgroundColor: [
                '#907860',
                '#786048',
                '#a89078',
                '#fff0a8',
                '#fff0c0',
                '#f0d8a8',
                '#604830',
                '#d8c090',
                '#483030'
              ],
              hoverOffset: 4
            }]
          }
        })
        break;
      case '4':
        this.LineChart.destroy();
        this.LineChart = new Chart('myChart2', {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '# of Votes',
              data: [43.79, 18.30, 9.299, 5.160, 4.549, 4.060, 4.034, 3.362, 3.196],
              backgroundColor: [
                '#604830',
                '#906048',
                '#483030',
                '#fff0c0',
                '#907860',
                '#a89060',
                '#c0a890',
                '#f0d8a8',
                '#a87848'
              ],
              hoverOffset: 4
            }]
          }
        })
        break;
      case '5':
        this.LineChart.destroy();
        this.LineChart = new Chart('myChart2', {
          type: 'doughnut',
          data: {
            datasets: [{
              label: '# of Votes',
              data: [31.52, 23.65, 13.89, 11.23, 8.576, 3.834, 3.065, 2.704, 1.371],
              backgroundColor: [
                '#787860',
                '#606048',
                '#f0d890',
                '#fff0a8',
                '#909078',
                '#483030',
                '#c0a890',
                '#d8a878',
                '#303018'
              ],
              hoverOffset: 4
            }]
          }
        })
        break;

    }


  }

  onMouseover(num: string): void {
    switch (num) {
      case '5':
        var ref = document.getElementById("blue");
        ref!.style.backgroundColor = "rgba(0,0,0,0.05)";
        break;
      case '4':
        var ref = document.getElementById("green-brown");
        ref!.style.backgroundColor = "rgba(0,0,0,0.05)";
        break;
      case '3':
        var ref = document.getElementById("grey-green");
        ref!.style.backgroundColor = "rgba(0,0,0,0.05)";
        break;
      case '2':
        var ref = document.getElementById("green");
        ref!.style.backgroundColor = "rgba(0,0,0,0.05)";
        break;
      case '1':
        var ref = document.getElementById("brown");
        ref!.style.backgroundColor = "rgba(0,0,0,0.05)";
        break;
    }
  }

  onMouseout(num: string): void {
    switch (num) {
      case '5':
        var ref = document.getElementById("blue");
        ref!.style.backgroundColor = "transparent";
        break;
      case '4':
        var ref = document.getElementById("green-brown");
        ref!.style.backgroundColor = "transparent";
        break;
      case '3':
        var ref = document.getElementById("grey-green");
        ref!.style.backgroundColor = "transparent";
        break;
      case '2':
        var ref = document.getElementById("green");
        ref!.style.backgroundColor = "transparent";
        break;
      case '1':
        var ref = document.getElementById("brown");
        ref!.style.backgroundColor = "transparent";
        break;
    }
  }

}
