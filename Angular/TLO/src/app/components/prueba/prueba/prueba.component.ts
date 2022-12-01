import { Component, Input } from '@angular/core';
import { Card } from '../../card/card/card.model';
import { MovieService } from '../../services-movie/movie.service';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {


  card: Card[]=[
    {
      id: 1,
      title: "Buscador de peliculas",
      description: "Ingresar ID de pelicula, para obtener mas información",
      posterURL: "./assets/mario.png"
    },
  ];

  cartelera: any = []



  constructor(private movie: MovieService) { }

  getGenero(chNum : any){
    const world = this.movie.listaPeliculas(chNum)
    world.subscribe(
      response => {
        this.cartelera = response
        console.log(response)
      },
      error => console.log(error)
    )
  }


}
