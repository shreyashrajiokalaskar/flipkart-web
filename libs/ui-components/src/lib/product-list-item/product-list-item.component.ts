import { ErrorService } from './../../shared/error.service';
import { ProductsDataService } from './../../shared/products-data.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  products;
  isAddedToWishlist: boolean = false;
  indexClicked;

  constructor(private productData : ProductsDataService,
    private errorService : ErrorService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.products = this.productData.products;
  }

  addToWishlist(index){
    this.errorService.errorMessage.next(this.errorService.errorList[0]);
    this.isAddedToWishlist = !this.isAddedToWishlist;
    this.indexClicked = index;
  }

  navigateTo(index){
    this._router.navigate([index], {relativeTo: this._activatedRoute});
  }

}


