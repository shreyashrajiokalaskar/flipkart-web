import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map, catchError } from 'rxjs';
import { ISuccessResponse, IProduct } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  FLIPKART_API_URL = environment.FLIPKART_API_URL;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string) {
    return this.http.get<T>(`${this.FLIPKART_API_URL}/${endpoint}`).pipe(
      map((response: T) => {
        return response;
      }),
      catchError((error) => {
        throw error.error.message;
      })
    );
  }

  post<T>(endpoint: string, body: any) {
    return this.http.post<T>(`${this.FLIPKART_API_URL}/${endpoint}`, body).pipe(
      map((response: T) => {
        return response;
      }),
      catchError((error) => {
        throw error.error.message;
      })
    );
  }
}
