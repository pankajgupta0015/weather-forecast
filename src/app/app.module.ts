import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from  './weather.service';
import { RouterModule, Routes } from '@angular/router';

export const routes : Routes = [
   {
     path:'' , component : HomeComponent
   },
   {
    path:'details' , component : DetailsComponent
   },
   {
    path:'home' , component : HomeComponent
   }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
