import { Component, Input } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input() datos:any;
  constructor(private weatherService: WeatherDataService, private favorites:FavoritesService) {
    
  }
  getData() {
    return this.weatherService.getData();
  }

  addFavorites(weather:any) {
    this.favorites.addFavorites(weather);
  }

  isAlreadyInFavorites(weather:any) {
    return this.favorites.isAlreadyInFavorites(weather);
  }
}
