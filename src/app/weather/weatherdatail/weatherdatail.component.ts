import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherdatail',
  templateUrl: './weatherdatail.component.html',
  styleUrls: ['./weatherdatail.component.scss']
})
export class WeatherdatailComponent implements OnInit {
  i: number;
  latitude : number;
  longitude :number;
  location : Object ;
  weather :String;
  

  constructor(private activeroute : ActivatedRoute , private weatherService : WeatherService) { 
    this.i = this.activeroute.snapshot.params.index;
  }

  ngOnInit() {
    console.log("iam in");
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
