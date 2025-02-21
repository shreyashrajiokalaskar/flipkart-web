import { ProductService } from "./../product-list/product.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IProduct } from "libs/shared/src/lib/interfaces/common-interfaces";
import { environment } from "libs/shared/src/lib/environments/environment";

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
        console.log(productData)
        const { result } = productData;
        result.rating = parseFloat(result?.rating?.toFixed(1) ?? 0);
        if (result) {this.productData = result; this.productData.images =  [this.getImagePath()];}
        this.loadingData = false;
      });
  }

    getImagePath(): string {
      return `${environment.IMAGE_CDN}/${this.productData.category.slug}/${this.productData.title}/thumbnail.png`;
    }
}
