import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatRippleModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule,
    MatExpansionModule,
    MatRippleModule,
    MatCardModule],
  exports: [MatExpansionModule]
})
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
  panelOpenState = false;
  imeKave: string;
  bla: kavaInterface[];
  size: number;
  brojedit: number = 0;
  kave: any;
  abc$: Observable<any>;
  selected: number;
  //newKava: Observable<any>;

  imekafe: string;
  brojkakafe:number;
  t: any;
  getKave(){
    this.apiService.find().subscribe(data => {
      this.bla = data; 
      console.log(this.bla);
      this.size = this.bla.length;
      console.log(this.size);
    });
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
    this.apiService.delete(id).pipe(
    map((response)=>{if(response.status==200){
      return response;
      }
      else{
        console.log("error");
      }
    }))
    .subscribe((response) => {this.t=response.status;console.log(this.t);this.getKave()} );
  }
  onClicka(blaa){
    this.selected = blaa.id;
    console.log("id buraz: " + this.selected);
    this.brojedit = 1;
    console.log(blaa.name);
    this.update(blaa);
    var div = document.getElementById('bl'+blaa.id);
    var klas = document.getElementsByClassName('testirambre');
    var klasuklas = document.getElementsByClassName('jostestirambre') as HTMLCollectionOf<HTMLElement>;
    var duljinaklas = klas.length;
    
    //console.log(klas);
    console.log(klasuklas);
  }
  update(blaa){
    var blakava: kavaInterface = {
      id: blaa.id,
      name: blaa.name,
      grade: blaa.grade
    }
  }
  

}
export interface kavaInterface{
  name:string;
  id?:number;
  grade:number;
}
