import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

    key = '32b773cc048835278ceee892cae675c1';
    url;
  constructor( private http :Http) { 
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }

    getWeatherDetail (city,code) {
      return this.http.get(this.url + city + ',' + code +'&mode=json'+ '&APPID=' + this.key)
      .map(res=>res.json());
        
      
    }
}
