import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private data:Array<any> = [];

  private urlBase:string = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=5fc08a59eabfcf006c7dc2f673de3b39";

  constructor(private httpClient:HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get(this.urlBase)
      .subscribe((data:any) => {
        this.data = data;

      })
  }

  getData() {
    return this.data;
  }
}
