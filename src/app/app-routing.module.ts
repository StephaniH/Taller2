import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { P1Component } from './juegos/pages/p1/p1.component';
import { P2Component } from './juegos/pages/p2/p2.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ppt', component: P1Component },
  { path: 'gato', component: P2Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
