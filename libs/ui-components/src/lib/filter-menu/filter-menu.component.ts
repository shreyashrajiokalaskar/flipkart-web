import { Component, OnInit } from '@angular/core';
// import { FilterMenuService } from 'src/app/shared/filter-menu.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  menuClicked = '';
  isVisible = false;
  filterMenuList!: { menuName: string; menuOptions: string[] }[];

  constructor() {}

  ngOnInit(): void {
    // this.filterMenuList = this.filterMenuData.filterMenu;
  }

  onToggleMenu() {
    // this.filterMenuData.toggleFilterMenu(
    //   document.getElementsByClassName('accordion')
    // );
  }
}
