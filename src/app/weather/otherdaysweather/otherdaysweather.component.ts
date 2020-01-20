import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otherdaysweather',
  templateUrl: './otherdaysweather.component.html',
  styleUrls: ['./otherdaysweather.component.scss']
})
export class OtherdaysweatherComponent implements OnInit {
  @Input() private weatherInformation;
  @Input() private index;
  private latitude : number;
  private longitude : number;
  constructor(private actroute : ActivatedRoute) { }

  ngOnInit() {
    this.latitude = this.actroute.snapshot.params.lat;
    this.longitude = this.actroute.snapshot.params.lng;
    console.log("majd");
    console.log(this.weatherInformation);
 
  }

}
