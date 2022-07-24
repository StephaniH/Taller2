import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string= '';
  usuarioLogueado: string='';
  mensajes:any = [
    {
      emisor:'id',
      texto: 'Hola que tal?'
    },
    {
      emisor:'id',
      texto: 'Hola'
    },
    {
      emisor:'id',
      texto: 'como estas?'
    },
    {
      emisor:'id',
      texto: 'Bien, y tu?'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  //   this.authService.getUserLogged().
  //   // .subscribe((u: any) => {
  //   //   this.usuarioLogueado = u;
  //   // });
  }

  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje = '';
  }
}
