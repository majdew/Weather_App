import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otherdaysweather',
  templateUrl: './otherdaysweather.component.html',
  styleUrls: ['./otherdaysweather.component.scss']
})
export class OtherdaysweatherComponent implements OnInit {
  @Input() private date ;
  @Input() private minTemp;
  @Input() private maxTemp;
  @Input() private icon;
  @Input() private description;
  @Input() private index;
  private latitude : number;
  private longitude : number;
  constructor(private actroute : ActivatedRoute) { }

  ngOnInit() {
    this.latitude = this.actroute.snapshot.params.lat;
    this.longitude = this.actroute.snapshot.params.lng;
 
  }

}
