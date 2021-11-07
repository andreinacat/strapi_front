import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallaServService {

  constructor(private http: HttpClient) { }

  getTallas() {
    return this.http.get('http://localhost:1337/Tallas')
  }
}
