import { Component, OnInit } from '@angular/core';
import { HoverMenuService } from 'src/app/shared/onHover-menu.service';

@Component({
  selector: 'app-on-hover',
  templateUrl: './on-hover.component.html',
  styleUrls: ['./on-hover.component.css']
})
export class OnHoverComponent implements OnInit {

  isHidden: boolean = true;
  menuList;

  constructor(private howerMenuService: HoverMenuService) { }

  ngOnInit(): void {
    this.howerMenuService.sendMenuList.subscribe(menu =>{

      if(menu === 'login'){
          this.menuList = this.howerMenuService.login;
      } else if(menu === 'more'){
          this.menuList = this.howerMenuService.moreMenuList;
      } else{
          this.menuList = null;
      }
    })

  }

}
