import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GridComponent } from './components/grid/grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RjavaComponent } from './components/rjava/rjava.component';
import { ZelenaComponent } from './components/zelena/zelena.component';
import { ZelenoRjavaComponent } from './components/zeleno-rjava/zeleno-rjava.component';
import { SivoRjavaComponent } from './components/sivo-rjava/sivo-rjava.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridComponent,
    RjavaComponent,
    ZelenaComponent,
    ZelenoRjavaComponent,
    SivoRjavaComponent
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
