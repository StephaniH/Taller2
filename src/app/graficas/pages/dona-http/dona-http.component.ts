import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
    
  ]
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartData: ChartData<'doughnut'> = {  
    datasets: [
      {
        data: []
      }
    ]
    
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data=>{
          console.log(data);         

          const labels = Object.keys(data);
          const values = Object.values(data);
          this.doughnutChartData.labels = labels;
          this.doughnutChartData.datasets[0].data=values ;
    });
  } 

}
