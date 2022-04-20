import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    P1Component,
    P2Component,
    PrincipalComponent
  ],
  exports: [
    P1Component,
    P2Component
  ],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
