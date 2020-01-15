import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentdayweatherComponent } from './currentdayweather/currentdayweather.component';
import { OtherdaysweatherComponent } from './otherdaysweather/otherdaysweather.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherdatailComponent } from './weatherdatail/weatherdatail.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchmodalComponent } from './searchmodal/searchmodal.component';
import { FiltercityPipe } from './filtercity.pipe';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent,
    SearchmodalComponent,
    FiltercityPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent
  ]
})
export class WeatherModule { }
