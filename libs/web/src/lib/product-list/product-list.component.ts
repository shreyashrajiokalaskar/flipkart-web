import { ProductService } from "./product.service";
import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { IProduct } from "libs/shared/src/lib/interfaces/common-interfaces";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  products: IProduct[] = [];
  loadingData = true;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
    this.router.events.subscribe({
      next: (event:any)=>{
        if(event instanceof NavigationEnd){
          this.loadData();
        }
      }
    })
  }

  loadData(){
    if(this.router.url.includes('/category')){
      const categoryId = this.router.url.split('/').reverse()[0];
      this.getProductByCategory(categoryId);
      return;
    } else {
      this.getProducts();
    }
  }

  getProductByCategory(categoryId:string){
    this.productService.getCategories(categoryId).subscribe({
      next: (products:any)=>{
        console.log(products)
        if (products.count) {
          this.products = [...products.result];
        }
        this.loadingData = false;
      },
      error: (error)  => {
        this.loadingData = false;
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products: any) => {
        console.log(products)
        if (products.count) {
          this.products = [...products.result];
        }
        this.loadingData = false;
      },
      (error) => {
        console.log("ERROR");
      }
    );
  }
}
