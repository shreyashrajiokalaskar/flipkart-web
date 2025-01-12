import { Component, OnInit } from '@angular/core';
import { STORAGE_KEYS } from 'libs/shared/src/lib/constants/common.constants';
import { IUserData } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails!: IUserData;
  activeMenu = 'user';

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: (navigate) => {
        if (navigate instanceof NavigationEnd) {
          this.activeMenu = this.router.url.split('/').reverse()[0];
        }
      },
    });
    this.activeMenu = this.router.url.split('/').reverse()[0];

  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USER_INFO) as string
    );
  }
}
