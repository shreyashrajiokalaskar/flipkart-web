import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'libs/shared/src/public-api';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css'],
})
export class DetailsListComponent implements OnInit {
  menuViewed: any;
  menuList: any;

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.menuList = this.navbarService.menuList;
    this.navbarService.toDisplayMenu.subscribe((menuData: number) => {
      if (menuData) {
        this.menuViewed = this.menuList[menuData];
      } else {
        this.menuViewed = null;
      }
    });
  }
}
