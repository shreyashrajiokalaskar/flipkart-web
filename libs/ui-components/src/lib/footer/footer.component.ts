import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flipkart-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerMenuList = [
    {
      listHeader: 'ABOUT',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
    {
      listHeader: 'HELP',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
    {
      listHeader: 'POLICY',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
    {
      listHeader: 'SOCIAL',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
    {
      listHeader: 'Mail Us',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
    {
      listHeader: 'Registered Office Address',
      list: [
        'Contact Us',
        'About Us',
        'Careers',
        'Flipkart Stories',
        'Press',
        'Flipkart Wholesale',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
