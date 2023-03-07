import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "libs/shared/src/lib/interfaces/common-interfaces";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit {
  @Input() productData: IProduct = {} as IProduct;

  constructor() {}

  ngOnInit(): void {}
}
