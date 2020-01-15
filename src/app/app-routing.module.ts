import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdatailComponent } from './weather/weatherdatail/weatherdatail.component';
import { WeatherlistComponent } from './weather/weatherlist/weatherlist.component';
import { SearchmodalComponent } from './weather/searchmodal/searchmodal.component';


const routes: Routes = [
  {path:"weatherdetail/:index/:lat/:lng" , component:WeatherdatailComponent},
  {path:" " , component:WeatherlistComponent},
  {path:"search" , component:SearchmodalComponent},
  {path:"homepage/:lat/:lng" , component:WeatherlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
