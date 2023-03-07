import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoPageComponent } from './product-info-page';

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
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class RoutingModule {}
