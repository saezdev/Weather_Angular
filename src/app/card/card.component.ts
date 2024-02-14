import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { FavoritesService } from '../favorites.service';
import { FiltrarPipe } from '../filtrar.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FiltrarPipe],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input() datos:any;
  // @Output() eventoBorrarFav = new EventEmitter()

  constructor(private weatherService: WeatherDataService, private favorites:FavoritesService) {
    
  }
  getData() {
    return this.weatherService.getData();
  }

  addFavorites(weather:any) {
    this.favorites.addFavorites(weather);
  }

  removeFavorites(weather:any) {
    this.favorites.removeFavorites(weather);
    // this.eventoBorrarFav.emit(this.datos)
  }

  isAlreadyInFavorites(weather:any) {
    return this.favorites.isAlreadyInFavorites(weather);
  }

  isAlreadyInPredeterminada(weather:any) {
    return this.favorites.isAlreadyInPredeterminada(weather);
  }
}
