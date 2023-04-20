import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './component/bienvenido/bienvenido.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ErrorComponent } from './component/error/error.component';


const routes: Routes = [
  {path: "", component: BienvenidoComponent},
  {path: "Login", component: LoginComponent},
  {path: "Registro", component: RegistroComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
