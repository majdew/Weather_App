import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdatailComponent } from './weather/pages/weatherdatail/weatherdatail.component';
import { WeatherlistComponent } from './weather/pages/weatherlist/weatherlist.component';
import { SearchmodalComponent } from './weather/pages/searchmodal/searchmodal.component';

const routes: Routes = [
	{path:"weatherdetail/:index/:lat/:lng" , component:WeatherdatailComponent},
	{path:"search" , component:SearchmodalComponent},
	{path:"homepage/:lat/:lng" , component:WeatherlistComponent},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
