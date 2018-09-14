import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()

export class DataService {
  private apiUrl;
  constructor(private http: Http) { 
    this.apiUrl = 'http://localhost:3000';

  }


  find(){
    return this.http.get(`${this.apiUrl}/kave`).pipe(
      map((res) => res.json()));
  }

  create(data) {
    return this.http.post(`${this.apiUrl}/kave/insert`, data, httpOptions).pipe(
      map((res) => res.json()));
  }

  delete(id){
    return this.http.delete(`${this.apiUrl}/kave/delete/${id}`,httpOptions);
  }

  update(data){
    return this.http.put(`${this.apiUrl}/kave/update/${data._id}`, data, httpOptions).pipe(
      map((res) => res.json()));
  }
}

