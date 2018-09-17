import { Component, OnInit, OnDestroy, NgModule,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatRippleModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSort, MatTableDataSource} from '@angular/material';

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
  styleUrls: ['./vjezba.component.scss']
})

export class VjezbaComponent implements OnInit, OnDestroy {
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiService: DataService) {
  }
  ngOnInit() {
    this.apiService.find().subscribe(data =>{
      console.log(data);
      this.bla = data;
      this.dataSource = new MatTableDataSource(this.bla);
      this.dataSource.sort = this.sort;});
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
  editImeKave: string;
  editOcjenaKave: number;
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
    var zadnjiBla = this.bla[this.bla.length - 1];
    var testnaKava: kavaInterface = {
      name: this.imekafe,
      grade: this.brojkakafe
    }
    console.log(testnaKava);
    const newKava = {
      id: zadnjiBla.id+1,
      name: this.imekafe,
      grade: this.brojkakafe
    };
    //this.bla.push(newKava);
    console.log("pushed");
    
    this.apiService.create(newKava).subscribe(res => this.bla.push(res));
  }
  consologaj(){
    console.log(this.bla);
  }

  izbrisi(id){
    console.log("izbrisi ovaj id: ");
    console.log(id);
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
    console.log("update this: ");
    console.log(blaa);
    console.log(this.editOcjenaKave);
    console.log(this.editImeKave);
    const blah = {
      update: blaa,
      a: this.editOcjenaKave,
      b: this.editImeKave,
    }
    const blah2 = {
      toUpdateId: blaa._id,
      newGrade: this.editOcjenaKave,
      newName: this.editImeKave,
    }
    console.log(blah);
    console.log(blah2);
    //this.apiService.update()
  }

}
export interface kavaInterface{
  name:string;
  id?:number;
  grade:number;
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
