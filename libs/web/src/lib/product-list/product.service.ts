import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "libs/shared/src/lib/environments/environment";
import { ICategory, IProduct, ISuccessResponse } from "libs/shared/src/lib/interfaces/common-interfaces";
import { map, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  FLIPKART_API_URL = environment.FLIPKART_API_URL;

  getProducts() {
    return this.httpClient
      .get<ISuccessResponse<IProduct[]>>(`${this.FLIPKART_API_URL}/products`)
      .pipe(
        map((response: ISuccessResponse<IProduct[]>) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }

  getCategories(id?:string){
    return this.httpClient
    .get<ISuccessResponse<ICategory[]>>(`${this.FLIPKART_API_URL}/category${id ? '/'+id : ''}`)
    .pipe(
      map((response: ISuccessResponse<ICategory[]>) => {
        return response;
      }),
      catchError((error) => {
        throw error.error.message;
      })
    );
  }

  getProductById(id: string) {
    return this.httpClient
      .get<ISuccessResponse<IProduct>>(`${this.FLIPKART_API_URL}/products/${id}`)
      .pipe(
        map((response: ISuccessResponse<IProduct>) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }
}
