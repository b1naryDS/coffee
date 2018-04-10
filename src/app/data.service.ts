import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()

export class DataService {
  private apiUrl;
  constructor(private http: Http) { 
    this.apiUrl = 'http://localhost:3000';

  }


  find(){
    return this.http.get(`${this.apiUrl}/coffee`)
      .map((res) => res.json());
  }

  create(data) {
    return this.http.post(`${this.apiUrl}/coffee`, data)
      .map((res) => res.json());
  }

  delete(id){
    return this.http.delete(`${this.apiUrl}/coffee/${id}`);
  }
}

