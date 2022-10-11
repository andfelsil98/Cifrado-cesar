import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes importados
// import { DecodificarComponent } from './components/decodificar/decodificar.component'
// import {  CodificarComponent } from './components/codificar/codificar.component'

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/codificar',
  //   pathMatch: 'full'
  // },
  // { path: 'codificar', component:CodificarComponent},
//  { path: 'decodificar', component:DecodificarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
