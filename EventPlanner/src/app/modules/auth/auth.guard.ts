
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        const queryParams = {};
        if (state.url !== "/auth/logout") {
            queryParams['returnUrl'] = state.url;
        }
        console.log('afoj')
        this.router.navigate(['/auth/login'], {
            queryParams: queryParams
        });
        return false;

    }
}