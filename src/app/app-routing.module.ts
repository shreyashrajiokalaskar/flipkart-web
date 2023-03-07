import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponentsModule } from '@flipkart/common-components';
import { ComponentsModule, RoutingModule } from '@flipkart/components';

import { AppComponent } from './app.component';
import { HttpInterceptorService, SocketService } from '@flipkart/shared-common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    CommonComponentsModule,
    RouterModule,
    RoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    SocketService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
