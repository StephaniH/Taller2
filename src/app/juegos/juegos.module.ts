import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { P3Component } from './pages/p3/p3.component';
import { DirectivaComponent } from './pages/directiva/directiva.component';
import { HijoComponent } from './pages/directiva/hijo/hijo.component';
import { HighlightDirective } from './pages/directiva/highlight.directive';

@NgModule({
  declarations: [
    P1Component,
    P2Component,
    PrincipalComponent,
    CalculadoraComponent,
    P3Component,
    DirectivaComponent,
    HijoComponent,
    HighlightDirective
  ],
  exports: [
    P1Component,
    P2Component,
    P3Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class JuegosModule { }
