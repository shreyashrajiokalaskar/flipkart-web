import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'libs/shared/src/lib/services/socket-io.service';
import { searchProducts } from 'libs/shared/src/public-api';
import { ProductService } from 'libs/web/src/lib/product-list/product.service';

@Component({
  selector: 'flipkart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search = '';
  constructor(
    private socketService: SocketService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  searchString() {
    const params = `?searchColumn=title&searchString=${this.search}`;
    searchProducts.next(params);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
