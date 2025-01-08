import { Component, Input, OnInit } from '@angular/core';
import {
  ICity,
  IProduct,
} from 'libs/shared/src/lib/interfaces/common-interfaces';
import { ProductService } from '../../product-list/product.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  @Input() productData: IProduct = {} as IProduct;
  pincodeInput: FormControl = new FormControl('', [
    Validators.min(111111),
    Validators.max(999999),
  ]);
  showPincodes = false;
  pincodes: ICity[] = [];

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  checkPincode() {
    console.log(this.pincodeInput);
    this.productService
      .checkPincodeValidity(this.pincodeInput.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.showPincodes = true;
          if(response.count){
            this.pincodes = response.result;
          }
        },
        error: (err) => {
          if (err.status === 404) {
            this.toastrService.error('Pincode not found!', 'Error');
          }
          console.error(err);
        },
      });
  }
}
