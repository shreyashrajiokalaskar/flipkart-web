import { Component, Input } from '@angular/core';

@Component({
  selector: 'flipkart-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() loading = true;
}
