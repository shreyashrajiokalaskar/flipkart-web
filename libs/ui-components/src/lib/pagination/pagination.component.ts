import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

export interface IPage {
  isActive: boolean;
  pageNumber: number;
}
@Component({
  selector: 'flipkart-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() active!: number;
  @Input() totalCount!: number;
  @Output() pageChanged = new EventEmitter<number>();
  pages: number[] = [];

  ngOnInit() {}

  ngOnChanges(): void {
    console.log(this.active, this.totalCount);
    for (let index = 0; index < this.totalCount; index++) {
      this.pages?.push(index + 1);
    }
  }

  changePage(pageNumber?: number) {
    if (pageNumber) {
      if (pageNumber !== this.active) {
        this.active = pageNumber;
        this.pageChanged.next(pageNumber);
      }
    } else {
      if (this.active !== this.pages[this.pages.length - 1]) {
        this.pageChanged.next(pageNumber as number);
        this.active++;
      }
    }
  }
}
