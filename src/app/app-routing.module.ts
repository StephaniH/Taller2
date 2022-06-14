import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { P1Component } from './juegos/pages/p1/p1.component';
import { P2Component } from './juegos/pages/p2/p2.component';
import { P3Component } from './juegos/pages/p3/p3.component';
import { CalculadoraComponent } from './juegos/pages/calculadora/calculadora.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "principal" },
  { path: 'cal', component: CalculadoraComponent },
  { path: 'ppt', component: P1Component },
  { path: 'gato', component: P2Component },
  { path: 'can', component: P3Component },
  { path: 'principal', component: SidebarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
