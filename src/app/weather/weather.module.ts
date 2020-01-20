import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentdayweatherComponent } from './currentdayweather/currentdayweather.component';
import { OtherdaysweatherComponent } from './otherdaysweather/otherdaysweather.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherdatailComponent } from './weatherdatail/weatherdatail.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchmodalComponent } from './searchmodal/searchmodal.component';
import { FiltercityPipe } from './filtercity.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';



@NgModule({
  declarations: [
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent,
    SearchmodalComponent,
    FiltercityPipe,
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CurrentdayweatherComponent,
    OtherdaysweatherComponent,
    WeatherlistComponent,
    WeatherdatailComponent,
    LoginpageComponent
  ]
})
export class WeatherModule { }
