import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-vjezba',
  templateUrl: './vjezba.component.html',
  styleUrls: ['./vjezba.component.css']
})
export class VjezbaComponent implements OnInit, OnDestroy {

  constructor(private apiService: DataService) {
    
  }


  ngOnInit() {
    this.apiService.find().subscribe(data =>{this.bla = data;});
  }

  ngOnDestroy(){  }
  imeKave: string;
  bla: kavaInterface[];
  size: number;

  kave: any;
  abc$: Observable<any>;
  //newKava: Observable<any>;

  imekafe: string;
  brojkakafe:number;
  t: any;
  getKave(){
    this.apiService.find().subscribe(data => {this.bla = data; console.log(this.bla);this.size = this.bla.length;console.log(this.size);});
    console.log(this.bla);
  }


  dodajKavu(){
    var testnaKava: kavaInterface = {
      name: this.imekafe,
      grade: this.brojkakafe
    }
    console.log(testnaKava);
    const newKava: kavaInterface = {
      name:"",
      grade:0
    };
    
    
    this.apiService.create(testnaKava).subscribe(response => this.bla.push(response));
  }

  izbrisi(id){
    this.apiService.delete(id).subscribe((response) => {this.t=response.status;console.log(this.t);} );
  }
  testa(f){
    console.log(f.value);
  }
  
  

}
export interface kavaInterface{
  name:string;
  id?:number;
  grade:number;
}
