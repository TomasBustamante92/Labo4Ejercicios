import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { AltaComponent } from './components/actorAlta/alta.component';
import { ListadoComponent } from './components/actorListado/listado.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
