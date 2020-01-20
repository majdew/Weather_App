import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherInformation } from '../weatherinformation';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.scss']
})
export class WeatherlistComponent implements OnInit {
  private latitude : number;
  private longitude : number;
  private weatherInformationList : WeatherInformation[] = [];
  private loading : boolean;

  constructor(private weatherService : WeatherService,private router : Router,private actroute : ActivatedRoute) { }

  ngOnInit() {
    console.log("entered");
    if(this.router.url.includes("homepage")){
      this.latitude = this.actroute.snapshot.params.lat;
      this.longitude = this.actroute.snapshot.params.lng;
      this.weatherService.getWeatherForcast(this.latitude , this.longitude)
      .subscribe(data =>{   
        for(let i = 0 ; i<40 ; i++){
          this.weatherInformationList[i] =new WeatherInformation( data , i);    
          console.log("done");  
          console.log(this.weatherInformationList[i]);
        }
        this.loading = true;
      });
    }
    else{
        if(navigator){
          navigator.geolocation.getCurrentPosition(response =>{
          this.latitude = response.coords.latitude;
          this.longitude = response.coords.longitude;
          this.weatherService.getWeatherForcast(this.latitude , this.longitude)
          .subscribe(data =>{
            console.log(data);
            if(data){
              for(let i = 0 ; i<data.list.length ; i++){
              this.weatherInformationList[i] = new WeatherInformation(data , i);
            }
            this.loading = true;    
            }  

          });
        });
      }
    }
  }
}
