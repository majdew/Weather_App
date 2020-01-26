import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentdayweatherComponent } from './components/currentdayweather/currentdayweather.component';
import { OtherdaysweatherComponent } from './components/otherdaysweather/otherdaysweather.component';
import { WeatherlistComponent } from './pages/weatherlist/weatherlist.component';
import { WeatherdatailComponent } from './pages/weatherdatail/weatherdatail.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchmodalComponent } from './pages/searchmodal/searchmodal.component';
import { FiltercityPipe } from './pipes/filtercity/filtercity.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';



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
	exports: [
		CurrentdayweatherComponent,
		OtherdaysweatherComponent,
		WeatherlistComponent,
		WeatherdatailComponent,
		LoginpageComponent
	]
})
export class WeatherModule { }
