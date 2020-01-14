import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-currentdayweather',
  templateUrl: './currentdayweather.component.html',
  styleUrls: ['./currentdayweather.component.scss']
})
export class CurrentdayweatherComponent implements OnInit {
  latitude : String = ' ';
  longitude :String = ' ';
  weather : Weather;
  weatherList : Object [];
  tempreture : number;
  city : String;
  minTemp : number;
  maxTemp : number;
  constructor(private locationService : LocationService , private weatherService : WeatherService) {
   }
   

  ngOnInit() {
    this.locationService.getCurrentLocation()
    .subscribe(data =>{
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        console.log(data);
        this.weather = data;
        this.weatherList = this.weather.weatherList;
         this.tempreture = Math.floor(this.weather.list[0].main.temp - 273);
         this.minTemp = Math.floor(this.weather.list[0].main.temp_max - 273);
         this.maxTemp = Math.floor(this.weather.list[0].main.temp_min - 273);
         this.city = this.weather.city.name;
        console.log(this.tempreture);
      }); 
    });
    console.log (this.weather);
  }

}
