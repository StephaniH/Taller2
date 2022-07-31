import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piccolo',
  templateUrl: './piccolo.component.html',
  styleUrls: ['./piccolo.component.css']
})
export class PiccoloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tecnicaPiccolo: string = '';

  // con cada tecla apretada se activa esta funcion.
  keyUp(letra: string) {
    this.tecnicaPiccolo = letra;
  }

  defender: boolean = false;
  piccoloImg: string='';

  defensa(confirmation: boolean){
    this.defender = confirmation;
    console.log(this.defender);

    //hacer genkidama si es true
    if(this.defender == true){
      this.piccoloImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigopabBlvWQnm4EBVC0iPD0usArLFt8BXRQ&usqp=CAU'
    }
  }
}
