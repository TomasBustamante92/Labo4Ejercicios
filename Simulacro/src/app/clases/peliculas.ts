export class Peliculas {
    id:number;
    nombre:string;
    tipo:tipoPelicula;
    fechaDeEstreno:string;
    cantidadDePublico:number;
    fotoDePelicula:string;

    constructor(id:number, nombre:string, tipo:tipoPelicula, fechaDeEstreno:string, cantidadDePublico:number, fotoDePelicula:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDePelicula = fotoDePelicula;
    }
}

export enum tipoPelicula{
    terror = "terror",
    comedia = "comedia",
    amor = "amor",
    otros = "otros"
}