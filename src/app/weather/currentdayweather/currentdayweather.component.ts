import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-currentdayweather',
  templateUrl: './currentdayweather.component.html',
  styleUrls: ['./currentdayweather.component.scss']
})
export class CurrentdayweatherComponent implements OnInit {

  constructor(private locationService : LocationService) {
    this.locationService.getCurrentLocation();
   }

  ngOnInit() {
    this.locationService.getCurrentLocation();
  }

}
