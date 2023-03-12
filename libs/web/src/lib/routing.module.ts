import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoPageComponent } from './product-info-page';
import { ToastrComponent } from 'libs/ui-components/src/lib/toastr/toastr.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginAuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [LoginAuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'product/:id',
        component: ProductInfoPageComponent,
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
