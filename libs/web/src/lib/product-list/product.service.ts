import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "libs/shared/src/lib/environments/environment";
import { ICategoriesResponse, IProductsResponse } from "libs/shared/src/lib/interfaces/common-interfaces";
import { map, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  FLIPKART_API_URL = environment.FLIPKART_API_URL;

  getProducts() {
    return this.httpClient
      .get<IProductsResponse>(`${this.FLIPKART_API_URL}/products`)
      .pipe(
        map((response: IProductsResponse) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }

  getCategories(id?:string){
    return this.httpClient
    .get<ICategoriesResponse>(`${this.FLIPKART_API_URL}/category${id ? '/'+id : ''}`)
    .pipe(
      map((response: ICategoriesResponse) => {
        return response;
      }),
      catchError((error) => {
        throw error.error.message;
      })
    );
  }

  getProductById(id: string) {
    return this.httpClient
      .get<IProductsResponse>(`${this.FLIPKART_API_URL}/products/${id}`)
      .pipe(
        map((response: IProductsResponse) => {
          return response;
        }),
        catchError((error) => {
          throw error.error.message;
        })
      );
  }
}
