import { RouterModule } from "@angular/router";
import { LoginModule } from "./login/login.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ProductInfoModule } from "./product-info-page/product-info.module";
import { ProductListModule } from "./product-list/product-list.module";
import { UIComponentsModule } from "libs/ui-components/src/lib/ui-components.module";
import { NgOtpInputModule } from "ng-otp-input";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileModule } from "./profile/profile.module";

@NgModule({
  imports: [
    LoginModule,
    CommonModule,
    UIComponentsModule,
    RouterModule,
    ProductInfoModule,
    ProductListModule,
    ReactiveFormsModule,
    ProfileModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class WebComponentsModule {}
