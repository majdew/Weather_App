import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FiltercityPipe} from '../filtercity.pipe';



@Component({
  selector: 'app-searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.scss']
})
export class SearchmodalComponent implements OnInit {
  private latitude : number;
  private longitude :number;
  private location : Object ;
  private cities : Object;
  private name : string ="";


  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(response =>{
        this.latitude = response.coords.latitude;
        this.longitude = response.coords.longitude;
        this.weatherService.getCities(this.latitude , this.longitude)
        .subscribe(data =>{   
          this.cities= data;
        });
      }); 
    }
  }
}
