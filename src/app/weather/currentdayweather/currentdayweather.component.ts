import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-currentdayweather',
  templateUrl: './currentdayweather.component.html',
  styleUrls: ['./currentdayweather.component.scss']
})
export class CurrentdayweatherComponent implements OnInit {
  latitude : String = ' ';
  longitude :String = ' ';
  location :Object;

  constructor(private locationService : LocationService) {
   }

  ngOnInit() {
    this.locationService.getCurrentLocation()
    .subscribe(data =>{
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    })
  }

}
