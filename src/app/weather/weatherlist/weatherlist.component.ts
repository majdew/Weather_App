import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.scss']
})
export class WeatherlistComponent implements OnInit {
  latitude : number;
  longitude :number;
  location : Object ;
  weather : String;

  constructor(private weatherService : WeatherService,private router : Router,private actroute : ActivatedRoute) { }

  ngOnInit() {
    if(this.router.url.includes("homepage")){
      this.latitude = this.actroute.snapshot.params.lat;
      this.longitude = this.actroute.snapshot.params.lng;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        console.log(data);
        this.weather = data;

      });
    }
    else{
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
