import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FilterMenuService {
  filterMenu = [
    {
      menuName: 'BRAND',
      menuOptions: ['Canon', 'GoPro', '24x7eMall', '2Fonz', '4D', '5PLUS'],
      wantSearchBox: true,
      wantMoreInfo: true,
    },
    {
      menuName: 'DISCOUNT',
      menuOptions: [
        '30% or more',
        '20% or more',
        '10% or more',
        '10% or below',
      ],
      wantSearchBox: false,
      wantMoreInfo: false,
    },
    {
      menuName: 'OFFERS',
      menuOptions: [
        'Buy More, Save More',
        'Exchange Offer',
        'No Cost EMI',
        'Special Price',
      ],
      wantSearchBox: false,
      wantMoreInfo: false,
    },
    {
      menuName: 'CUSTOMER RATINGS',
      menuOptions: ['4* & above', '3* & above', '2* & above', '1* & above'],
      wantSearchBox: false,
      wantMoreInfo: false,
    },
    {
      menuName: 'AVAILABILITY',
      menuOptions: ['Include Out of Stock'],
      wantSearchBox: false,
      wantMoreInfo: false,
    },
    {
      menuName: 'GST INVOICE AVAILABLE',
      menuOptions: ['GST Invoice Available'],
      wantSearchBox: false,
      wantMoreInfo: false,
    },
  ];

  toggleFilterMenu(accordionGroup: HTMLCollection) {
    for (let i = 0; i < accordionGroup.length; i++) {
      accordionGroup[i].addEventListener('click', function () {
        // this.classList.toggle('active');
        // let panel = this.nextElementSibling;
        // if (panel.style.display === 'block') {
        //   panel.style.display = 'none';
        // } else {
        //   panel.style.display = 'block';
        // }
      });
    }
  }
}
