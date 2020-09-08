import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  edadUno: number;
  edadDos: number;
  suma : number = 0;
  promedio : number = 0;


  calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar(){
    this.edadUno = null;
    this.edadDos = null;
    this.suma = 0;
    this.promedio = 0;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
