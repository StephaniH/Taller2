import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() usuarioInChild='';
 
  //@Output 
  mensaje = "Hola mundo";

  @Output() miEvento = new EventEmitter<string>();

  ejecutarEvento()
  {
    this.miEvento.emit(this.mensaje);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
