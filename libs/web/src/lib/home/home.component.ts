import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
@Component({
  selector: "flipkart-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  hideSidenav = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.hideSidenav = this.router.url.includes("product/") || this.router.url.includes("profile");
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideSidenav = this.router.url.includes("product/") || this.router.url.includes("profile");
      }
    });
  }
}
