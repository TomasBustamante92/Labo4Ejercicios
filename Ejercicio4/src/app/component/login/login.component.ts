import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  respuestaInput = "";

  public emailList = ["jesus", "abuela"];
  public passwordList = ["si", "123"];

  ingresar(){
    for(let i=0 ; i<this.emailList.length ; i++){
      
      if(this.emailList[i] == this.email && 
        this.passwordList[i] == this.password){

        this.respuestaInput = "Ingreso accedido";
      }
      else{
        this.respuestaInput = "Email o contraseña incorrectos";
      }
    };
  }


}
