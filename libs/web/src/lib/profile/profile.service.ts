import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'libs/shared/src/lib/environments/environment';
import { ISuccessResponse } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  FLIPKART_API_URL = environment.FLIPKART_API_URL;

  constructor(private http: HttpClient) {}

  getUserById(userId: string) {
    return this.http
      .get<ISuccessResponse<any>>(`${this.FLIPKART_API_URL}/user/${userId}`)
      .pipe(
        map((response: ISuccessResponse<ISuccessResponse<any>>) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }

  updateUser(userId: string, body:any) {
    return this.http
      .patch<ISuccessResponse<any>>(`${this.FLIPKART_API_URL}/user/${userId}`, body)
      .pipe(
        map((response: ISuccessResponse<ISuccessResponse<any>>) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }
}
