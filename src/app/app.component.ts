import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase01';

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

}
