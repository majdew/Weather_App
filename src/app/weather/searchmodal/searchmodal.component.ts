import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FiltercityPipe} from './../filtercity.pipe';



@Component({
  selector: 'app-searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.scss']
})
export class SearchmodalComponent implements OnInit {
  latitude : number;
  longitude :number;
  location : Object ;
  cities : Object;
  name : string =" ";


  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(response =>{
        console.log(response);
        this.latitude = response.coords.latitude;
        this.longitude = response.coords.longitude;
        this.weatherService.getCities(this.latitude , this.longitude)
        .subscribe(data =>{   
          console.log(data);
          this.cities= data;
  
        });
      }); 

  }
}

}
