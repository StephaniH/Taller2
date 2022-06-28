import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán América"];
  heroeBorrado: string = ' ';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }

  // @Output
  getMensaje(e: any)
  {
    console.log(e);
  }

  // @Input
  usuarioInParent='User0104';

  // ngPlural
  itemNum = 0;
  personNum = 0;
  minutes = 0;

  // ngSwitch
  Cars: any[] = [
    {
      "name": "BMW",
      "average": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  // ngClass
  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
