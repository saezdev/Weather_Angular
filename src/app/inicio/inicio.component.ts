import { Component } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { CardComponent } from '../card/card.component';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './inicio.component.html',
  styles: ``
})
export class InicioComponent {

  datos:any = "";
  constructor(private bd:WeatherDataService, private favorites:FavoritesService) {
    // this.bd.fetchData();
    // console.log("Estamos en inicio")
  }

  getData() {
    return this.bd.getData();
  }

  getFavorites() {
    return this.favorites.getFavorites();
  }

  getPredeterminada() {
    return this.favorites.getPredeterminada();
  }
}
