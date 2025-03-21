import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoPageComponent } from './product-info-page';
import { ToastrComponent } from 'libs/ui-components/src/lib/toastr/toastr.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { AddressesComponent } from './profile/addresses/addresses.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginAuthGuard],
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    // canActivate: [LoginAuthGuard],
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent,
    // canActivate: [LoginAuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [LoginAuthGuard],
    children: [
      {
        path: 'product/:id',
        component: ProductInfoPageComponent,
      },
      {
        path: 'category/:id',
        component: ProductListComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'user',
            component: UserProfileComponent,
          },
          {
            path: 'addresses',
            component: AddressesComponent,
          },
        ],
      },
      {
        path: '',
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ToastrModule.forRoot({
      toastComponent: ToastrComponent,
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      easing: 'ease-out',
      tapToDismiss: true,
      extendedTimeOut: 1000,
      // enableHtml: true,
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
