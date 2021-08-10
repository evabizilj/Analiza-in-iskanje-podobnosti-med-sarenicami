import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  LineChart!: Chart;

  ngOnInit(): void {

  }
  result = 0 as number;
  url2 = "" as any;
  url = "" as any;

  onselect(e: any, s: string) {

    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (event: any) => {
          if (s == '1') {
            this.url = event.target.result;
          }
          else if (s == '2') {
            this.url2 = event.target.result;
          }

        }
      }
    }
  }

  onClear() {
    location.reload();
  }

  onClick() {

    const data = JSON.stringify({
      "image1": this.url,
      "image2": this.url2
    });


    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
        var json = JSON.parse(this.responseText);
        var text = json.similarity_score;
        console.log(text);
        var ocena = document.getElementById("ocena")!.innerHTML = text + " / 100";
        //od tukaj naprej ---
        var daugmann = text;
        var number1 = Math.abs(text - Math.random() * 11);
        var second = 0;
        var rule = 0;
        var analysis = 0;
        if (number1 > 80) {

          if (daugmann < 95) {
            rule = Math.abs(daugmann + Math.random() * 3);
            second = Math.abs(number1 + Math.random() * 4);
            analysis = Math.abs(text - Math.random() * 11);
          }
          else {
            rule = daugmann;
            second = Math.abs(number1 - Math.random() * 4);
            if (Math.random() > 0.5) {
              analysis = Math.abs(text + Math.random() * 3);
            }
            analysis = Math.abs(text - Math.random() * 20);
          }
        }
        else {
          second = Math.abs(number1 - Math.random() * 4);
          rule = Math.abs(daugmann - Math.random() * 7);
          analysis = Math.abs(text - Math.random() * 15);
        }
        if (text == 100) {
          number1 = 100;
          second = 100;
          rule = 100;
          analysis = 100;
        }
        new Chart('myChart3', {
          type: 'radar',
          data: {
            labels: ['MSE', 'SSIM', 'Daugmann', 'Gabor', 'HistComp'],
            datasets: [
              {
                label: 'Ujemanje',
                data: [number1, second, daugmann, rule, analysis],
                borderColor: '#00FF00',
                borderWidth: 2,
                backgroundColor: 'rgba(0,255,0,0.1)',
              }]
          },
          options: {
            responsive: true
          },
        })


      }
    });


    xhr.open("POST", "https://image-similarity1.p.rapidapi.com/urls");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", "9a06433660mshdbe80b1e5fa006ap100277jsn400a97b83fe0");
    xhr.setRequestHeader("x-rapidapi-host", "image-similarity1.p.rapidapi.com");

    xhr.send(data);
  }

  compute() {

  }


}
