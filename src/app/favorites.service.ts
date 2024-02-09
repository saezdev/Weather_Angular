import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites:any = [];
  constructor() { }

  addFavorites(weather:any) {
    this.favorites.push(weather);
  }

  getFavorites() {
    return this.favorites;
  }

  isAlreadyInFavorites(weather:any) {
    return this.favorites.find((c:any) => c.id == weather.id)
  }
}
