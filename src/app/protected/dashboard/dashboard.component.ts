import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from 'src/app/services/web-socket.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{ 
  
  
  get usuario() {
    return this.authService.usuario;
  }

  algo: Object = this.authService.usuario

  


  constructor( private router: Router,
               private authService: AuthService ,
               private activated : ActivatedRoute,
                private webService: WebSocketService ) { }

  logout() {

    this.router.navigateByUrl('/auth');
    this.authService.logout();
    
  }

  userChat = {
    user: '',
    text: '',
    time:''
  }
  user: string = ''
  myMessages:any 
  
  eventName = "send-message";


  ngOnInit(): void {
    this.userChat.user = this.authService.getUser();
    this.user= this.authService.getUser()
    this.webService.listen('text-event').subscribe((data) => {
      this.myMessages = data;
    }) 
    console.log(this.user);

  }
  
  myMessage() {
    let fecha = new Date();
    this.userChat.time = fecha.getHours().toString()+":"+ fecha.getMinutes().toString()
    console.log(this.userChat.time );
    
    this.webService.emit(this.eventName, this.userChat);
    this.userChat.text = '';
    this.userChat.time = '';
    
  }
}
