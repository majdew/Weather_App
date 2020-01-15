import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otherdaysweather',
  templateUrl: './otherdaysweather.component.html',
  styleUrls: ['./otherdaysweather.component.scss']
})
export class OtherdaysweatherComponent implements OnInit {
  @Input() date ;
  @Input() minTemp;
  @Input() maxTemp;
  @Input() icon;
  @Input() description;
  @Input() index;
  latitude : number;
  longitude : number;
  constructor(private actroute : ActivatedRoute) { }

  ngOnInit() {
    this.latitude = this.actroute.snapshot.params.lat;
    this.longitude = this.actroute.snapshot.params.lng;
 
  }

}
