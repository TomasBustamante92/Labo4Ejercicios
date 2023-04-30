import { Component, Input } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @Input() peli: Peliculas;

  recibiRespuesta(peli: Peliculas){
    this.peli = peli;
  }
}
