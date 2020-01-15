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
        this.tempreture = response.list[i].main.temp;
        this.lowTempreture= response.list[i].main.temp_min;
        this.highTempreture = response.list[i].main.temp_max;
        this.humidity = response.list[i].main.humidity;
        this.windSpeed = response.list[i].wind.speed;
        this.pressure = response.list[i].main.pressure;
        this.highTempreture = response.list[i].dt;
        this.icon = response.list[i].weather[0].icon;
        this.description = response.list[i].weather[0].description;
    }
}