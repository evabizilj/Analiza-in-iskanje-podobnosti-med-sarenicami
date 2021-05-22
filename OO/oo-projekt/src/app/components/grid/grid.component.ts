import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  constructor() {}


  gifi: String[] = [
    'GIF_made_100.gif',
    'GIF_made_103.gif',
    'GIF_made_119.gif',
    'GIF_made_12.gif',
    'GIF_made_125.gif',
    'GIF_made_129.gif',
    'GIF_made_137.gif',
    'GIF_made_14.gif',
    'GIF_made_141.gif',
    'GIF_made_148.gif',
    'GIF_made_154.gif',
    'GIF_made_161.gif',
    'GIF_made_164.gif',
    'GIF_made_172.gif',
    'GIF_made_179.gif',
    'GIF_made_188.gif',
    'GIF_made_193.gif',
    'GIF_made_200.gif',
    'GIF_made_204.gif',
    'GIF_made_211.gif',
    'GIF_made_215.gif',
    'GIF_made_22.gif',
    'GIF_made_222.gif',
    'GIF_made_225.gif',
    'GIF_made_231.gif',
    'GIF_made_239.gif',
    'GIF_made_243.gif',
    'GIF_made_249.gif',
    'GIF_made_256.gif',
    'GIF_made_260.gif',
    'GIF_made_267.gif',
    'GIF_made_274.gif',
    'GIF_made_281.gif',
    'GIF_made_286.gif',
    'GIF_made_292.gif',
    'GIF_made_297.gif',
    'GIF_made_30.gif',
    'GIF_made_301.gif',
    'GIF_made_310.gif',
    'GIF_made_318.gif',
    'GIF_made_324.gif',
    'GIF_made_329.gif',
    'GIF_made_33.gif',
    'GIF_made_333.gif',
    'GIF_made_340.gif',
    'GIF_made_346.gif',
    'GIF_made_349.gif',
    'GIF_made_355.gif',
    'GIF_made_366.gif',
    'GIF_made_369.gif',
    'GIF_made_37.gif',
    'GIF_made_375.gif',
    'GIF_made_384.gif',
    'GIF_made_4.gif',
    'GIF_made_47.gif',
    'GIF_made_52.gif',
    'GIF_made_56.gif',
    'GIF_made_63.gif',
    'GIF_made_68.gif',
    'GIF_made_72.gif',
    'GIF_made_78.gif',
    'GIF_made_80.gif',
    'GIF_made_85.gif',
    'GIF_made_93.gif',
  ];


  ngOnInit(){}

  toggle(i: number) {
    console.log(document.getElementsByTagName("img"))
    var modal = document.getElementsByTagName("div")[70];
    var modalImg = document.getElementsByTagName("img")[64];
    modal.style.display = "block";
    modalImg.src = "../../../assets/gifs/" + this.gifi[i];
  }

  close() {
    var modal = document.getElementsByTagName("div")[70];
    modal.style.display = "none";
  }
}
