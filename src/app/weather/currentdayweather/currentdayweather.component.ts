import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-currentdayweather',
  templateUrl: './currentdayweather.component.html',
  styleUrls: ['./currentdayweather.component.scss']
})
export class CurrentdayweatherComponent implements OnInit {
  latitude : number;
  longitude :number;
  location : Object ;
  weather :String;
  date =new Date();


  constructor(private weatherService : WeatherService , private router : Router , private actroute : ActivatedRoute) {
   }
   

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
    else {
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


}
