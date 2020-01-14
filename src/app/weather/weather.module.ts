import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentdayweatherComponent } from './currentdayweather/currentdayweather.component';
import { OtherdaysweatherComponent } from './otherdaysweather/otherdaysweather.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherdatailComponent } from './weatherdatail/weatherdatail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent
  ]
})
export class WeatherModule { }
