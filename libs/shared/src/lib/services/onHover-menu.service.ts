import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class HoverMenuService{

    login = [
                {
                    menuItem:'New Customer ?',
                    menuSymbol: ''
                },
                {
                    menuItem: 'My Profile',
                    menuSymbol: 'fa fa-user-circle'
                },
                { 
                    menuItem: 'Flipkart Plus Zone',
                    menuSymbol : 'fa fa-plus'
                },
                { 
                    menuItem: 'Orders',
                    menuSymbol: 'fa fa-shopping-basket'
                },
                {
                    menuItem: 'Wishlist',
                    menuSymbol: 'fa fa-heart'
                },
                {
                    menuItem: 'Rewards',
                    menuSymbol: 'fa fa-gift'
                },
                {
                    menuItem: 'Giftcards',
                    menuSymbol: 'fa fa-download'
                }
            ]

    moreMenuList = [
                {
                    menuItem: 'Notification Preferences',
                    menuSymbol: 'fa fa-bell'
                },
                {
                    menuItem: 'Sell on Flipkart',
                    menuSymbol: 'fa fa-briefcase'
                },
                {
                    menuItem: '24X7 Customer Care',
                    menuSymbol: 'fa fa-question-circle'
                },
                {
                    menuItem: 'Advertise',
                    menuSymbol: 'fa fa-shopping-basket'
                },
                {
                    menuItem: 'Download App',
                    menuSymbol: 'fa fa-download'
                }
            ]

    sendMenuList = new Subject();
    sendPhotoIndex = new Subject();
}