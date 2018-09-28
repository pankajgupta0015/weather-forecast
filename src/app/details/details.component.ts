import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  city: string;
  code: string;

  constructor(private router: Router) {


  }

  ngOnInit() {
  }


  findWeatherDetail(){

    let location = {
      city: this.city,
      state: this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home']);
  }


}
