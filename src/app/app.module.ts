import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { HttpModule } from '@angular/http'; 



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DataService } from './data.service';
import { CoffeesComponent } from './coffees/coffees.component';
import { VjezbaComponent } from './vjezba/vjezba.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    CoffeesComponent,
    VjezbaComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
