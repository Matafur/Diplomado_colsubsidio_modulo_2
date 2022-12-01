import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL:string = "https://api.sampleapis.com/movies/"

  constructor(private movie : HttpClient) { }

  getPelicula(genero: string, id: number ){
    return this.movie.get(`${this.API_URL}/${genero}/${id}`);
  }
  listaPeliculas(valor: string ){
    return this.movie.get(`${this.API_URL}/${valor}`);
  }

}
