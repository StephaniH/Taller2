import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tecnicaGohan: string='';

  @Output() reaccionGohan = new EventEmitter<boolean>();
  
  Alerta(msg: boolean){
    this.reaccionGohan.emit(msg);
  }


}
