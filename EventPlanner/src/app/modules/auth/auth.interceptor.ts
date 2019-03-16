import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let update = {};
        if (localStorage.getItem('currentToken')) {
            update = {
                headers: req.headers.set('Session-Id', localStorage.getItem('currentToken'))
            };
        }
        const authReq = req.clone(update);
        return next.handle(authReq)
            .pipe(catchError(err => {
                if (err instanceof HttpErrorResponse && err.status === 401) {
                    this.auth.logout();
                }
                return throwError(err);
            }));
    }
}
