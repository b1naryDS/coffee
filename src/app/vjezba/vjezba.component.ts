import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vjezba',
  templateUrl: './vjezba.component.html',
  styleUrls: ['./vjezba.component.css']
})
export class VjezbaComponent implements OnInit, OnDestroy {

  constructor(private apiService: DataService) { }


  ngOnInit() {
    this.apiService.find().subscribe(data =>{this.bla = data;});
  }

  ngOnDestroy(){  }
  bla: kavaInterface[];
  size: number;

  kave: any;
  abc$: Observable<any>;
  newKava: Observable<any>;
  

  getKave(){
    this.apiService.find().subscribe(data => {this.bla = data; console.log(this.bla);this.size = this.bla.length;console.log(this.size);});
    console.log(this.bla);
  }


  dodajKavu(){
    const kava={
      id:``,
      name: `kava test`,
      grade: 3
    }
    this.apiService.create(kava).subscribe(response => this.bla.push(response));
  }

  izbrisi(id){
    this.apiService.delete(id).subscribe();
  }

  

}
export interface kavaInterface{
  name:string;
  id:number;
  grade:number;
}
