import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  @Output() emailList: string[] = [];
  @Output() passwordList: string[] = [];

  email = '';
  password = '';
  passwordAgain = '';
  respuestaInput = "";

  registrarse(){
    if(this.password == this.passwordAgain){

      this.emailList.push(this.email);
      this.passwordList.push(this.password);
      this.respuestaInput = "Usuario registrado con exito";
    }
    else{
      this.respuestaInput = "Las contraseñas son distintas";
    }
  }
}
