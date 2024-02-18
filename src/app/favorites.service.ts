import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites:any = [];
  predeterminada:any = [];
  constructor() { 
    this.favorites = JSON.parse(localStorage.getItem("weather") || '[]');
    this.predeterminada = JSON.parse(localStorage.getItem("predeterminada") || '[]');
  }

  addFavorites(weather:any) {
    this.favorites.push(weather);
    this.saveFavoritesToLocalStorage()
  }

  addPredeterminada(weather:any) {
    this.predeterminada = weather;
    localStorage.setItem("predeterminada", JSON.stringify(this.predeterminada));
  }

  removeFavorites(weather:any) {
    // let indice = this.favorites.findIndex((c:any) => c.id == weather.id);
    // console.log("INDICE: " + indice);
    // this.favorites.splice(indice,1);
    this.favorites = this.favorites.filter( (e:any) => e.id != weather.id)
    this.saveFavoritesToLocalStorage();
  }

  removePredeterminada() {
    this.predeterminada = {};
  }

  getFavorites() {
    return this.favorites;
  }

  getPredeterminada() {
    return this.predeterminada;
  }

  isAlreadyInFavorites(weather:any) {
    return this.favorites.find((c:any) => c.id == weather.id)
  }

  isAlreadyInPredeterminada(weather:any) {
    // return this.predeterminada.find((c:any) => c.id == weather.id);
    if(this.predeterminada == weather)
      return true;

    return false;
  }

  saveFavoritesToLocalStorage() {
    localStorage.setItem("weather", JSON.stringify(this.favorites));
  }
}
