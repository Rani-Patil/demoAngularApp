import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING'; // or your real backend

  constructor(private http: HttpClient) {

   }
   
   getAll(): Observable<any> {
    return this.http.get(this.API);
  }
}
