import { Component, EventEmitter, Output } from '@angular/core';
import { Peliculas, tipoPelicula } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  vistaTabla = true;
  @Output() peliculaElegida: EventEmitter<Peliculas> = new EventEmitter();
  
  peliculas: Peliculas[] = [
    {id: 0, nombre: "El Resplandor", tipo: tipoPelicula.terror, fechaDeEstreno: "1985", cantidadDePublico: 5000, fotoDePelicula: "https://i0.wp.com/www.heyuguys.com/images/2017/10/the-shining-correct.jpg?fit=2048%2C1258&ssl=1"},
    {id: 1, nombre: "Yes man", tipo: tipoPelicula.comedia, fechaDeEstreno: "2010", cantidadDePublico: 6000, fotoDePelicula: "https://m.media-amazon.com/images/M/MV5BMzBmZTMzYmItNzhhMC00M2FkLWIxMGEtMjIxMjAwNmQ2ZmM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"},
    {id: 2, nombre: "Señor de los Anillos", tipo: tipoPelicula.otros, fechaDeEstreno: "2001", cantidadDePublico: 10000, fotoDePelicula: "https://m.media-amazon.com/images/I/71TZ8BmoZqL.jpg"},
    {id: 3, nombre: "Star Wars", tipo: tipoPelicula.otros, fechaDeEstreno: "1984", cantidadDePublico: 20000, fotoDePelicula: "https://d22fxaf9t8d39k.cloudfront.net/b2f9ea3eaa4988df8600c0cc98a18fc3cee5eba3aad000b7fa69cc714c36253129571.jpeg"},
  ];

  cambiarVista(){

    if(this.vistaTabla == true){
      this.vistaTabla = false;
    }
    else{
      this.vistaTabla = true
    }
  }

  peliculaSeleccionada(peli:Peliculas){
    this.peliculaElegida.emit(peli)
  }
}
