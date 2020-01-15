import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import {WeatherInformation} from './../weatherinformation';


@Component({
  selector: 'app-currentdayweather',
  templateUrl: './currentdayweather.component.html',
  styleUrls: ['./currentdayweather.component.scss']
})
export class CurrentdayweatherComponent implements OnInit {
  private latitude : number;
  private longitude :number;
  private weather :String;
  private today =new Date();

  constructor(private weatherService : WeatherService , private router : Router , private actroute : ActivatedRoute ) {

   }
   
  ngOnInit() {
    if(this.router.url.includes("homepage")){
      this.latitude = this.actroute.snapshot.params.lat;
      this.longitude = this.actroute.snapshot.params.lng;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        this.weather = data;
      });
    }
    else {
        if(navigator){
          navigator.geolocation.getCurrentPosition(response =>{
          this.latitude = response.coords.latitude;
          this.longitude = response.coords.longitude;
          this.weatherService.getWeatherForcast(this.latitude , this.longitude)
          .subscribe(data =>{   
            this.weather = data;
          });
        });
      }
    }
  }
}
