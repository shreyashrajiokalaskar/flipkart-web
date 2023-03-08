import { ProductService } from "./../product-list/product.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IProduct } from "libs/shared/src/lib/interfaces/common-interfaces";

@Component({
  selector: "app-product-info-page",
  templateUrl: "./product-info-page.component.html",
  styleUrls: ["./product-info-page.component.scss"],
})
export class ProductInfoPageComponent implements OnInit {
  productData: IProduct = {} as IProduct;
  loadingData = true;
  reviewForm = new FormGroup({
    rating: new FormControl([Validators.required]),
    review: new FormControl([Validators.required]),
  });

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductById(this.router.snapshot.params["id"]);
  }

  getProductById(productId: string) {
    this.productService
      .getProductById(productId)
      .subscribe((productData: any) => {
        const { data } = productData;
        const product = data.products[0];
        product.rating = parseFloat(product.rating.toFixed(1));
        if (product) this.productData = product;
        this.loadingData = false;
      });
  }
}
