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
      emisor:'enviado',
      texto: 'Hola que tal?'
    },
    {
      emisor:'recibido',
      texto: 'Hola'
    },
    {
      emisor:'enviado',
      texto: 'como estas?'
    },
    {
      emisor:'recibido',
      texto: 'Bien, y tu?'
    },
    {
      emisor:'enviado',
      texto: 'dc?'
    },
    {
      emisor:'recibido',
      texto: 'Holacdscds'
    },
    {
      emisor:'enviado',
      texto: 'codcsdc?'
    },
    {
      emisor:'recibido',
      texto: 'Bcdscsdcsdcdd?'
    },
    {
      emisor:'enviado',
      texto: 'Hola que taldscds?'
    },
    {
      emisor:'recibido',
      texto: 'Hola ds ds sd'
    },
    {
      emisor:'enviado',
      texto: 'como estasd ds sd ds?'
    },
    {
      emisor:'recibido',
      texto: 'Bien, y tuds ds ds d sd ?'
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
