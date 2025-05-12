import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { UserData } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public API = "https://jsonplaceholder.typicode.com/posts/1";
  constructor(private http: HttpClient) {

   }
   
  getUserDetails(): Observable<any> {
    return this.http.get<UserData>(this.API);
  }
}
