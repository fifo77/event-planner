import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private toastr: ToastrService 
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let update = {};
    
        const authReq = req.clone(update);
        return next.handle(authReq)
            .pipe(catchError(err => {
                if (err instanceof HttpErrorResponse && Math.floor(err.status / 100) === 5) {
                    this.toastr.error('Server error occurred')
                }
                return throwError(err);
            }));
    }
}
