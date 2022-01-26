import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get('https://61f12139072f86001749f044.mockapi.io/api/v1/animals')  ;
  }
}
