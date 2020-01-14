import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.scss']
})
export class WeatherlistComponent implements OnInit {
  latitude : number;
  longitude :number;
  location : Object ;
  weather :String;

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(response =>{
        console.log(response);
        this.latitude = response.coords.latitude;
        this.longitude = response.coords.longitude;
        this.weatherService.getWeatherForcast(this.latitude , this.longitude)
        .subscribe(data =>{   
          console.log(data);
          this.weather = data;
  
        });
      });
      console.log (this.weather);
    }
  }



}
