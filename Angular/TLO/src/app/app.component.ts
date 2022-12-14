import { Component } from '@angular/core';
import { Card } from './components/card/card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TLO';

  card: Card[]=[
    {
      id: 1,
      title: "Clase por defecto",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      posterURL: "./assets/mario.png"
    },
  ];
}
