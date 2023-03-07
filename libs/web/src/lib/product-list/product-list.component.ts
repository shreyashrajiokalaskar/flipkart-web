import { ProductService } from "./product.service";
import { Component } from "@angular/core";
import { IProduct } from "libs/shared/src/lib/interfaces/common-interfaces";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  products: IProduct[] = [];
  loadingData = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (products: any) => {
        if (products.data.totalCount) {
          this.products = [...products.data.products];
        }
        this.loadingData = false;
      },
      (error) => {
        console.log("ERROR");
      }
    );
  }
}
