import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ICategory } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { ProductService } from 'libs/web/src/lib/product-list/product.service';
// import { FilterMenuService } from 'src/app/shared/filter-menu.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  menuClicked = '';
  isVisible = false;
  filterMenuList: { menuName: string; id: string; menuOptions: string[] }[] =
    [];
  selectedMenu!: { menuName: string; id: string; menuOptions: string[] } | null;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url.includes('/category')) {
            const categoryId = this.router.url.split('/').reverse()[0];
            this.filterMenuList.forEach((item) => {
              if (item.id === categoryId) {
                this.selectedMenu = item;
              }
            });
            return;
          } else {
            this.selectedMenu = null;
          }
        }
      },
    });
    this.loadData();
    // this.filterMenuList = this.filterMenuData.filterMenu;
  }

  loadData() {
    this.productService.getCategories().subscribe({
      next: (res) => {
        let categoryId = '';
        if (this.router.url.includes('/category')) {
          categoryId = this.router.url.split('/').reverse()[0];
        }
        res.data.categories.forEach((category: ICategory) => {
          const categoryObj = {
            menuName: category.name,
            id: category.id,
            menuOptions: [],
          };
          if(category.id === categoryId){
            this.selectedMenu = categoryObj;
          }
          this.filterMenuList.push(categoryObj);
        });
      },
    });
  }

  onToggleMenu(index: number) {
    this.selectedMenu = this.filterMenuList[index];
  }
}
