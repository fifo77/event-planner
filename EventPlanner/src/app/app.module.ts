import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthModule } from './modules/auth/auth.module';
import { AuthInterceptor } from './modules/auth/auth.interceptor';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.route';
import { ErrorComponent } from './error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserModule } from './modules/users/user.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SharedModule } from './modules/shared/shared.module';
import { EventModule } from './modules/events/event.module';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModule,
    AuthModule,
    DashboardModule,
    UserModule,
    SharedModule,
    EventModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
