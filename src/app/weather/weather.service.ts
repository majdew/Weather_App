import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Weather } from './weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) { }

  getWeatherForcast(lat:String , lon:String){
    return this.httpClient.get<Weather>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&APPID=0ecd6422798842a8f738d79bbc76e9c8`);
  }
}
