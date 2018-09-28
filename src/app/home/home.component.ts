import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit  {

  
  constructor(private weatherService : WeatherService) { 
  
  }
  
  location ={
    city: 'London',
    code :'GB'
  };
  weather : any ;
  value : any;
  ngOnInit() {

    this.value = localStorage.getItem('location');

      if (this.value!=null && this.value!="{}"){
          this.location=JSON.parse(this.value);
      }else {
        this.location={
          city:'london',
          code:'GB'

        }
      };
    this.weatherService.getWeatherDetail(this.location.city, this.location.code).subscribe(
      response =>{
      
      this.weather = response;
      
    });
    
  }
  
}
