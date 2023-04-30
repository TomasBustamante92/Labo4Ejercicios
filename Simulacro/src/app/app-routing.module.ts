import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas', loadChildren: () => import('./modules/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule) },
  { path: "**", component: ErrorComponent}
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