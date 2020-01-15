import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  weather :String;
  date = new Date();
  

  constructor(private actroute : ActivatedRoute , private weatherService : WeatherService,private router : Router) { 
  }

  ngOnInit() { 
    this.i = this.actroute.snapshot.params.index;
    if(this.router.url.includes("weatherdetail")){
      this.latitude = this.actroute.snapshot.params.lat;
      this.longitude = this.actroute.snapshot.params.lng;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        this.weather = data;
      });
    }
  }


}
