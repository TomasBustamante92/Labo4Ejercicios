import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './components/actorAlta/alta.component';
import { ListadoComponent } from './components/actorListado/listado.component';

const routes: Routes = [
  { path: 'alta', component: AltaComponent },
  { path: 'listado', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
