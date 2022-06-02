import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  //variables
  num1: number;
  num2: number;
  result: number;

  constructor() { 
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  ngOnInit(): void {
  }

  public add(){
    this.result = this.num1 + this.num2
  }

  public sub(){
    this.result = this.num1 - this.num2
  }

  public mul(){
    this.result = this.num1 * this.num2
  }

  public div(){
    this.result = this.num1 / this.num2
  }
}