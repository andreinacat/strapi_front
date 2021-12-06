import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallaServService {

  constructor(private http: HttpClient) { }

  getTallas() {
    return this.http.get('https://api-trespass.herokuapp.com/tallas')
  }
}
