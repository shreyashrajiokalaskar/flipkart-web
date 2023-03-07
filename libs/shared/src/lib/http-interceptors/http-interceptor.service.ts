import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpInterceptorService implements HttpInterceptor {
  token = '';
  skipInterceptor = false;

  constructor(private router: Router) {
    this.token = this.getToken();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this.getToken();
    this.skipInterceptor = req.url.includes('auth');
    if (this.token || !this.skipInterceptor) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.token}`),
      });
    } else {
      this.router.navigate(['/login']);
    }
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          } else {
            console.error('Error:' + err.error.message);
          }
        }
        return throwError(err);
      })
    );
  }

  getToken() {
    return JSON.parse(sessionStorage.getItem('userInfo') as string)?.token;
  }
}
