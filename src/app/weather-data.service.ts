import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  datos:any;
  resultados:any = [];
  private urlBaseFiltro = "https://api.openweathermap.org/data/2.5/find?q="
  // private patron:string = "";
  private apiKey = "&appid=5fc08a59eabfcf006c7dc2f673de3b39"
  constructor(private httpClient:HttpClient) { 
    // this.fetchData()
  }

  fetchDataFiltrada(patron:string) {
    this.httpClient
    .get(this.urlBaseFiltro + patron + this.apiKey)
    .subscribe((data:any) => {
      this.resultados = data.list;
    })
  }

  getData() {
    return this.datos;
  }

  getDataFiltrada() {
    return this.resultados;
  }

  
}