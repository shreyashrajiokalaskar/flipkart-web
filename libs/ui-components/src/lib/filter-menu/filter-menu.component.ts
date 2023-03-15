import { Component, OnInit } from '@angular/core';
import { FilterMenuService } from 'libs/shared/src/public-api';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  menuClicked: string = '';
  isVisible: boolean = false;
  filterMenuList!: { menuName: string; menuOptions: string[] }[];

  constructor(private filterMenuData: FilterMenuService) {}

  ngOnInit(): void {
    this.filterMenuList = this.filterMenuData.filterMenu;
  }

  onToggleMenu() {
    this.filterMenuData.toggleFilterMenu(
      document.getElementsByClassName('accordion')
    );
  }
}
