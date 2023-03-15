import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  isHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
