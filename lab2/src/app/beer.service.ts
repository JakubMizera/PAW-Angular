import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get<any>(this.apiUrl);
  }
}