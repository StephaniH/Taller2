import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasDoblesComponent } from './pages/radar/barras-dobles.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'menu-graficas', component: GraficaBarraComponent},
      { path: 'barra', component: BarrasComponent},
      {path: 'barra-doble', component: BarrasDoblesComponent},
      {path: 'dona', component: DonaComponent},
      {path: 'dona-http', component: DonaHttpComponent},
      {path: '**', redirectTo:'menu-graficas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
