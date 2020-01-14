import { Component, OnInit, Input } from '@angular/core';

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
   



  constructor() { }

  ngOnInit() {
 
  }

}
