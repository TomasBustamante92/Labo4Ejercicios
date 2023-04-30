import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
// import { ListadoComponent } from './components/peliculaListado/listado.component';
// import { AltaComponent } from './components/peliculaAlta/alta.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    RouterModule
  ],
  exports: [

  ]
})
export class PeliculasModule { }
