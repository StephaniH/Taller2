import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component {
  posiciones=[['-','-','-'],
  ['-','-','-'],
  ['-','-','-']];
  jugador='O';
  user: string = ""
  jugador1 = 0
  jugador2= 0

  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar() {
    for(let f=0;f<3;f++)
    for(let c=0;c<3;c++)
    this.posiciones[f][c]='-';
  }

  cambiarJugador() {
    if (this.jugador=='O')
    this.jugador='X';
    else
    this.jugador='O';    
  }

  verificarGano(ficha: string) {
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)      
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha)
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha){
      alert('Ganó: '+ficha);
      this.ganador(ficha) 
    }
  }

  ganador(jugador: string){
    if (jugador=='O')
      this.jugador1+=1;
    else
    this.jugador2+=1;

  }
}