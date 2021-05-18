import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  constructor() {}

  gifi: String[] = [
    '.1.gif',
    '.2.gif',
    '.3.gif',
    '.4.1.1.1.gif',
    '.4.1.1.gif',
    '.4.1.gif',
    '.4.gif',
    '.48.1.gif',
    '.48.2.gif',
    '.48.gif',
    '.49.1.1.gif',
    '.49.1.gif',
    '.49.gif',
    '.5.1.1.1.gif',
    '.5.1.1.gif',
    '.5.1.gif',
    '.5.2.gif',
    '.5.gif',
    '.6.1.gif',
    '.6.gif',
    '.GIF_made_103.gif',
    '.GIF_made_119.gif',
    '.GIF_made_14.gif',
    '.GIF_made_211.gif',
    '.GIF_made_340.gif',
    '.GIF_made_355.1.gif',
    '.GIF_made_355.gif',
    '.GIF_made_50.gif',
    '.GIF_made_51.gif',
    '.GIF_made_52.1.gif',
    '.GIF_made_52.2.gif',
    '.GIF_made_52.gif',
    '.GIF_made_53.gif',
    '.GIF_made_78.gif',
    '.GIF_made_79.1.gif',
    '.GIF_made_79.2.gif',
    '.GIF_made_79.gif',
    '49.gif',
    '50.gif',
    '51.1.gif',
    '52.gif',
    '53.1.1.gif',
    '53.1.2.gif',
    '53.2.1.1.gif',
    '53.2.2.1.gif',
    '53.2.2.gif',
    '53.2.3.gif',
    '53.2.4.gif',
    '53.2.gif',
    '53.gif',
    '54.gif',
    '55.1.gif',
    '55.gif',
    '56.gif',
    '57.gif',
    '58.0.gif',
    '58.2.gif',
    '58.gif',
    '59.gif',
    '60.gif',
    '61.gif',
    '62.gif',
    '63.gif',
    '64.gif',
  ];

  index: number = 1;

  ngOnInit(): void {
    this.index = 1;
  }

  next() {
    if(this.index < 26) this.index++;
  }

  prev() {
    if(this.index > 1) this.index--;
  }
}
