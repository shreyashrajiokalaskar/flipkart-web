import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { HeaderModule } from './header/header.module';
import { LoaderComponent } from './loader/loader.component';
import { ToastrComponent } from './toastr/toastr.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule],
  declarations: [
    NavBarComponent,
    FooterComponent,
    FilterMenuComponent,
    LoaderComponent,
    ToastrComponent,
    PaginationComponent,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    FilterMenuComponent,
    HeaderModule,
    LoaderComponent,
    ToastrComponent,
    PaginationComponent,
  ],
})
export class UIComponentsModule {}
