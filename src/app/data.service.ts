import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {
  private apiUrl;
  constructor(private http: Http) { 
    this.apiUrl = 'http://localhost:3000';

  }


  find(){
    return this.http.get(`${this.apiUrl}/coffee`).pipe(
      map((res) => res.json()));
  }

  create(data) {
    return this.http.post(`${this.apiUrl}/coffee`, data).pipe(
      map((res) => res.json()));
  }

  delete(id){
    return this.http.delete(`${this.apiUrl}/coffee/${id}`);
  }

  update(data){
    return this.http.put(`${this.apiUrl}/coffee/${data.id}`, data).pipe(
      map((res) => res.json()));
  }
}

