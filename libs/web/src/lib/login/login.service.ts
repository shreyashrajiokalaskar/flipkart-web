import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "libs/shared/src/lib/environments/environment";
import { IUserData } from "libs/shared/src/lib/interfaces/common-interfaces";
import { catchError, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  FLIPKART_API_URL = environment.FLIPKART_API_URL;

  createUser(userData: IUserData) {
    return this.httpClient
      .post<any>(`${this.FLIPKART_API_URL}/auth/signup`, {
        ...userData,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }

  loginUser(userData: any) {
    return this.httpClient
      .post<any>(`${this.FLIPKART_API_URL}/auth/login`, {
        ...userData,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          throw error;
        })
      );
  }
}
