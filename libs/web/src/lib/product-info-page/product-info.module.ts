import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductInfoPageComponent } from "./product-info-page.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { ProductPhotosComponent } from "./product-photos/product-photos.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UIComponentsModule } from "libs/ui-components/src/public-api";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UIComponentsModule,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  declarations: [
    ProductInfoComponent,
    ProductPhotosComponent,
    ProductInfoPageComponent,
  ],
  exports: [
    ProductInfoPageComponent,
    ProductPhotosComponent,
    ProductInfoComponent,
  ],
})
export class ProductInfoModule {}
