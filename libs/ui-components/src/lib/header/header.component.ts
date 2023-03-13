import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'libs/shared/src/lib/services/socket-io.service';

@Component({
  selector: 'flipkart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search = '';
  constructor(private socketService: SocketService, private router: Router) {}

  ngOnInit(): void {}

  searchString() {
    this.socketService.socket.emit('', this.search);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
