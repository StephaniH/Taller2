import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { P3Component } from './pages/p3/p3.component';

@NgModule({
  declarations: [
    P1Component,
    P2Component,
    PrincipalComponent,
    CalculadoraComponent,
    P3Component
  ],
  exports: [
    P1Component,
    P2Component,
    P3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuegosModule { }
