import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'libs/shared/src/lib/environments/environment';
import { IProduct } from 'libs/shared/src/lib/interfaces/common-interfaces';

@Component({
  selector: 'flipkart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}

  getDiscountedPrice(percentage: number, originalPrice: number) {
    return originalPrice - (originalPrice * percentage) / 100;
  }

  getImagePath(): string {
    return `${environment.IMAGE_CDN}/${this.product.category.slug}/${this.product.title}/thumbnail.png`;
  }
}
