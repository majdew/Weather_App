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
  location : Object ;
  weather : Weather;
  weatherList : Object [];

  constructor(private locationService : LocationService , private weatherService : WeatherService) {
   }
   

  ngOnInit() {
    this.locationService.getCurrentLocation()
    .subscribe(data =>{
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.location =  data;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        console.log(data);
        this.weather = data;

      }); 
    });
    console.log (this.weather);
  }

}
// 