import { Component } from '@angular/core';
import { interval } from 'rxjs'; //Async Pipe

@Component({
  selector: 'app-p6pipes',
  templateUrl: './p6pipes.component.html',
  styleUrls: ['./p6pipes.component.css']
})
export class P6pipesComponent {
   //pipes básicos
   nombreLower: string = 'angular';
   nombreUpper: string = 'ANGULAR';
   nombreAleatorio: string = 'aNgUlAr';
   
   //date pipes
   fecha: Date = new Date(); //El día de hoy
 
   //Decimalpipes
   numeroReal: number = 2567789.5567;
   porcentaje: number = 1.3495;
 
   //pipes no tan comunes
   //i18nSelect
   nombreGenero: string = 'Mario';
   genero: string = 'masculino';
   invitacionMapa = {
     'masculino': 'bienvenido',
     'femenino': 'bienvenida'
   }
 
   cambiarNombre() {
     this.nombreGenero = 'María',
     this.genero = 'femenino'
   }
   //i18nPlural
   clientes: string[] =['Maria', 'Pedro', 'Ana', 'Joaquin', 'Javier'];
   clientesMapa = {
     '=0': 'no tenemos ningún cliente esperando.',
     '=1': 'tenemos 1 cliente esperando.',
     'other': 'tenemos # clientes esperando.'
   }
 
   borrarClientes() {
     this.clientes.pop();
   }
 
   //Json Pipe
   heroes = [
     {
       nombre: 'Superman',
       vuela: true
     },
     {
       nombre: 'Batman',
       vuela: false
     },
     {
       nombre: 'Aquaman',
       vuela: false
     }
   ]
 
   //KeyValue Pipe
   persona = {
     nombre: 'Fernando',
     edad: 35,
     dirección: 'Ottawa, Canadá'
   }
 
   //Async Pipe
   miObservable = interval(1000);
   miPromesa = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Tenemos data de promesa');
     }, 3000);
   });

}
