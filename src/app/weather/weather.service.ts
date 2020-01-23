import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment'


@Injectable({
	providedIn: 'root'
})
export class WeatherService {


	constructor(private httpClient : HttpClient) { }

	getWeatherForcast(lat:number , lon:number){
		return this.httpClient.get<any>(`${environment.weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&APPID=${environment.weatherApiKey}`);
	}
	
	getCities(lat:number , lon:number){
		return this.httpClient.get<String>(`${environment.weatherApiUrl}/find?lat=${lat}&lon=${lon}&cnt=50&APPID=${environment.weatherApiKey}`);
	}
}
