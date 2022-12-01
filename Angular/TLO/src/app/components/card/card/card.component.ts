import { Component, Input } from '@angular/core';
import { MovieService } from '../../services-movie/movie.service';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() cardInfo: any = {
    id: 1,
    title: "Buscar peliculas por ID",
    description: "Diligenciar el id de la pelicula para obtener mayor información",
    posterURL: "./assets/mario.png"
  }


  constructor(private movie: MovieService) { }

  getIdMovie(mvNum:any){
    const obs = this.movie.getPelicula("drama",mvNum)
    obs.subscribe(
      response => {
        this.cardInfo = response
        console.log(response)
      },
      error => console.log(error)
    )
  }

}
