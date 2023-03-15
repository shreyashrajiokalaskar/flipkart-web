import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class ErrorService{
    errorList = [
        'Please Login to add to wishlist'
    ]

    errorMessage = new Subject();
}