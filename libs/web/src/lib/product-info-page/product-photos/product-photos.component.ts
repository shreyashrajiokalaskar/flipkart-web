import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-photos',
  templateUrl: './product-photos.component.html',
  styleUrls: ['./product-photos.component.scss'],
})
export class ProductPhotosComponent implements OnInit, AfterViewChecked {
  @Input() photos: string[] = [];
  index = 0;
  isReduced = false;
  displayImage!: string;
  constructor() {}

  ngOnInit(): void {
    this.isReduced = true;
  }

  ngAfterViewChecked(): void {
    if (this.photos?.length) this.displayImage = this.photos[0];
  }

  onGallery(index: number) {
    if (index < 0) {
      this.displayImage = this.photos[0];
      this.isReduced = false;
    } else {
      this.index = index;
      this.isReduced = !this.isReduced;
      this.displayImage = this.photos[this.index];
    }
  }
}
