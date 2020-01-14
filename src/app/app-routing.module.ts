import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdatailComponent } from './weather/weatherdatail/weatherdatail.component';
import { WeatherlistComponent } from './weather/weatherlist/weatherlist.component';


const routes: Routes = [
  {path:"weatherdetail/:index" , component:WeatherdatailComponent},
  {path:"weatherlist" , component:WeatherlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
