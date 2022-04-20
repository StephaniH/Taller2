import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  title() {
    throw new Error('Method not implemented.');
  }
  result: string= '';
  pointsUser = 0;
  pointsComp =  0;

  constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    console.log(result);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }
}
