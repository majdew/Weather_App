import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {

   }

  getCurrentLocation(){
    console.log("entered");
    if(navigator.geolocation){
      console.log("entered 2");
      navigator.geolocation.getCurrentPosition(position =>{
        console.log("entered 3");
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log("majd");
        console.log("lat" + latitude +" lon"+longitude);
      })
    }
    else{
      console.log("you cant");
    }
  }



}
