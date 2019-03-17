import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    loggedUser: Object;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
    ) {
        if (localStorage.getItem('currentUser')) {
            this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
            this.isLoggedIn = true;
        }
    }

    check() {
        console.log('check', this.isLoggedIn);
        //this.isLoggedIn = true;
        return false;
        this.httpClient
            .get(environment.host + '/auth/check').subscribe(data => {
                this.isLoggedIn = true;
            }, () => {
                //this.toastr.error('Boli ste odhlásený!');
                this.logout();
            });
    }

    login(user: User, remember: Boolean, returnUrl: string, errCb: Function) {
        /*this.isLoggedIn = false;
        user.password = 'fuck you';
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedUser = user;
        this.router.navigate([returnUrl]);
        this.isLoggedIn = true;*/
        console.log('post request');
        this.httpClient.post(environment.host + '/login', { username: user.email, password: user.password })
            .subscribe(data => {
                console.log('usemj sa');
                //if (data['status'] === 'success') {
                    this.loggedUser = {
                        //id: data['user'],
                        email: user.email,
                    };
                    //const token = data['token'];
                    localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
                    //localStorage.setItem('currentToken', token);
                    this.router.navigate([returnUrl]);
                    this.isLoggedIn = true;
                //}
            }, err => {
                console.log('fuck', err);
                errCb();
            });
    }

    logout() {
        this.isLoggedIn = false;

        localStorage.removeItem('currentUser');
        /*this.httpClient.get(environment.host + '/auth/logout').subscribe(() => {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            localStorage.removeItem('currentToken');

            // not logged in so redirect to login page with the return url
            let queryParams = {};
            const state = this.router.routerState.snapshot;
            if (state.url !== '/auth/logout' && state.url !== '/auth/login') {
                queryParams = { returnUrl: state.url };
            }
            this.router.navigate(['/auth/login'], {
                queryParams: queryParams
            });
            return false;
        });*/

        this.router.navigate(['/auth/login']);
    }
}
