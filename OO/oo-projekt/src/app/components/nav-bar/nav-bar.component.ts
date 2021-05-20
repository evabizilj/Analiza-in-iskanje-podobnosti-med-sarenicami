import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropdown() {
    var dropdown = document.getElementsByTagName("div")[4];
    if(dropdown.classList.contains("show")) {
      dropdown.classList.remove('show');
    } else {
      dropdown.classList.toggle("show")
    }
  }
}
