import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from 'libs/shared/src/lib/constants/common.constants';
import { IUserData } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { SocketService } from 'libs/shared/src/lib/services/socket-io.service';

@Component({
  selector: 'flipkart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search = '';
  constructor(private socketService: SocketService, private router: Router) {}
  userDetails!: IUserData;

  ngOnInit(): void {
    this.userDetails = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USER_INFO) as string
    );
  }

  searchString() {
    // this.socketService.socket.emit('', this.search);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
