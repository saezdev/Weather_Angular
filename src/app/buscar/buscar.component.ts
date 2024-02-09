import { Component, Input } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { FavoritesService } from '../favorites.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar.component.html',
  styles: ``
})
export class BuscarComponent {
  patron:string = "";
  pattern:string = "";
  datos:any = [];

  constructor(private bd:WeatherDataService, private favorites:FavoritesService) {
    console.log("Esto es una " + this.bd.getData())
    
  }

  getData(){
    return this.bd.getData();
  }

  getDataFiltrada() {
    return this.bd.getDataFiltrada();
  }

  isAlreadyInFavorites(weather:any) {
    return this.favorites.isAlreadyInFavorites(weather);
  }

  addFavorites(weather:any) {
    this.favorites.addFavorites(weather);
    console.log("AÑADIDO");
  }

  fetchData() {
    this.bd.fetchDataFiltrada(this.patron);
  }
}
