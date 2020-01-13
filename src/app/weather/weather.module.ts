import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentdayweatherComponent } from './currentdayweather/currentdayweather.component';
import { OtherdaysweatherComponent } from './otherdaysweather/otherdaysweather.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';



@NgModule({
  declarations: [
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent
  ]
})
export class WeatherModule { }
