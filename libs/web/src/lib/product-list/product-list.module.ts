import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import { UIComponentsModule } from "libs/ui-components/src/public-api";

@NgModule({
  imports: [CommonModule, RouterModule, UIComponentsModule],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent, ProductComponent],
})
export class ProductListModule {}
