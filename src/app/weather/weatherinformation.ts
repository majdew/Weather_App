import './../../environments/environment';
import { environment } from './../../environments/environment';
export class WeatherInformation {
    cityName : String;
    tempreture : number;
    lowTempreture : number;
    highTempreture : number;
    pressure : number;
    windSpeed : number;
    date : Date;
    icon : String;
    description : String;
    humidity : String;

    constructor (response : any , i : number){
        this.cityName = response.city.name;
        this.tempreture = Math.round(response.list[i].main.temp - 273) ;
        this.lowTempreture= Math.round(response.list[i].main.temp_min - 273);
        this.highTempreture = Math.round(response.list[i].main.temp_max - 273);
        this.humidity = response.list[i].main.humidity;
        this.windSpeed = response.list[i].wind.speed;
        this.pressure = response.list[i].main.pressure;
        this.date = response.list[i].dt;
        this.icon = this.getIconUrl(response.list[i].weather[0].icon);
        this.description = response.list[i].weather[0].description;
    }

    getIconUrl(iconId : any):string{
        return `${environment.weatherIconUrl}${iconId}@2x.png`;
    }
}