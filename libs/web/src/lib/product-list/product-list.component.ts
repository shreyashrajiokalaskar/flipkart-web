import { ProductService } from './product.service';
import { Component } from '@angular/core';
import { IProduct } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { searchProducts } from 'libs/shared/src/public-api';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  loadingData = true;
  isEmpty = false;
  totalCount!: number;
  activePage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    searchProducts.subscribe((params) => {
      this.getProducts(params);
    });
  }
  getProducts(params?: string) {
    this.productService.getProducts(params).subscribe(
      (products: any) => {
        if (products.data.totalCount) {
          console.log(products.data.totalCount);
          this.totalCount = products.data.totalCount;
          this.products = [...products.data.products];
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
        this.loadingData = false;
      },
      (error) => {}
    );
  }
}
