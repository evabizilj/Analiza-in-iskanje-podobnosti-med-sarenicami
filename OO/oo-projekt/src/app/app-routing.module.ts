import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { RjavaComponent } from './components/rjava/rjava.component';
import { SivoRjavaComponent } from './components/sivo-rjava/sivo-rjava.component';
import { ZelenaComponent } from './components/zelena/zelena.component';
import { ZelenoRjavaComponent } from './components/zeleno-rjava/zeleno-rjava.component';

const routes: Routes = [
  { path: 'rjava', component: RjavaComponent },
  {path: '', component: GridComponent},
  {path: 'zelena', component: ZelenaComponent},
  {path: 'zelena-rjava', component: ZelenoRjavaComponent},
  {path: 'siva-rjava', component: SivoRjavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
