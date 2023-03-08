import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RoutingModule } from "libs/web/src/lib/routing.module";
import { UIComponentsModule } from "libs/ui-components/src/public-api";
import { WebComponentsModule } from "libs/web/src/public-api";
import { HttpInterceptorService } from "libs/shared/src/lib/http-interceptors/http-interceptor.service";
import { SocketService } from "libs/shared/src/lib/services/socket-io.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WebComponentsModule,
    UIComponentsModule,
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
