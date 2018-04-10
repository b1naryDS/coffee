import { Component } from '@angular/core';
import { DataService } from './data.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService){

  }

  someProperty: string= '';
  someArray: Array<String> = ["a","b","c"];

  ngOnInit(){
  }
  


}
