import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GridComponent } from './components/grid/grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ChartComponent } from './chart/chart.component';
import { ColorCategoryComponent } from './color-category/color-category.component';
import { Chart2Component } from './chart2/chart2.component';
import { DaugmannComponent } from './daugmann/daugmann.component';
import { TopbuttonComponent } from './topbutton/topbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChartComponent,
    ColorCategoryComponent,
    Chart2Component,
    DaugmannComponent,
    TopbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
