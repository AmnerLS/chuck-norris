import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NorrisApiService {
  baseUrl = 'https://api.chucknorris.io';
  constructor(private http: HttpClient) {   }

  getCategories(): Observable<any>{
    return this.http.get(`${this.baseUrl}/jokes/categories`);
  }

  getJokes(category?:String) : Observable<any>{
    let url = `${this.baseUrl}/jokes/random`;
    if(category){
      url += `?category=${category}`;
    }
    return this.http.get(url);
  }

}
