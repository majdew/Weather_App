import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude:String;
  longitude:String;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient : HttpClient) {

   }

   getCurrentLocation(){
     return this.httpClient.get<Location>('http://api.ipapi.com/195.3.190.151?access_key=8f949cf29a49f6326fdd51e77bc0316f');
   }



}
