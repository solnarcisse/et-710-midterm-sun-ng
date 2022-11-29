import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TranspoComponent } from './transpo/transpo.component'
import {AppComponent } from './app.component'


const routes: Routes = [
  {path: 'myApp', component:AppComponent},
  {path: 'Transpo' , component: TranspoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
