import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) { }

  getWeatherForcast(lat:number , lon:number){
    return this.httpClient.get<String>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=0ecd6422798842a8f738d79bbc76e9c8`);
  }
}
