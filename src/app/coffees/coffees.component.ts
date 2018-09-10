import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';


@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  public kave: any;
  kafe$: Observable<any[]>
  url = 'http://localhost:3000/coffee';
  constructor(private apiService: DataService) {}

  ngOnInit() {
    this.getAllCoffees();
  }

  getAllCoffees() {
    this.apiService.find().subscribe((res)=>{
      this.kave = res;
    }),(err)=>{
      console.log(err);
    }
    this.kafe$ = this.apiService.find();
  }
  
  create() {
    const kava = {
      name: `name`,
      id: ``,
      grade: `3`
    }

    this.apiService.create(kava).subscribe(
      (res) => {
        console.debug('Success!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    )
    this.getAllCoffees();
  }
}
