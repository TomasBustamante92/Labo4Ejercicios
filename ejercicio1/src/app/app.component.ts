import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno = '';
  edadDos = '';
  suma = '';
  promedio = '';

  calcular(){
    let sumar = Number(this.edadUno) + Number(this.edadDos);
    this.suma = String(sumar);
    this.promedio = String(sumar / 2);
  }

  limpiarCuadros(){
    this.edadUno = "";
    this.edadDos = "";
    this.suma = "";
    this.promedio = "";
  }
}
