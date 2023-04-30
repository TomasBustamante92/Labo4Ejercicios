import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './components/peliculaAlta/alta.component';
import { ListadoComponent } from './components/peliculaListado/listado.component';

const routes: Routes = [
  { path: 'alta', component: AltaComponent },
  { path: 'listado', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
