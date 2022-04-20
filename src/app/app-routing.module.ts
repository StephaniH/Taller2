import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'ppt', component: P1Component },
  { path: 'gato', component: P2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
