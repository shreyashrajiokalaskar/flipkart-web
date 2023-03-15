import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class FooterService{
    footerMenu = [
        {
            listHeader : 'ABOUT',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        },
        {
            listHeader : 'HELP',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        },
        {
            listHeader : 'POLICY',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        },
        {
            listHeader : 'SOCIAL',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        },
        {
            listHeader : 'Mail Us',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        },
        {
            listHeader : 'Registered Office Address',
            list: [
                'Contact Us',
                'About Us',
                'Careers',
                'Flipkart Stories',
                'Press',
                'Flipkart Wholesale'
            ]
        }
    ]
}