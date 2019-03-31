import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
            this.isLoggedIn = localStorage.getItem('authorization') ? true : false;
        }
    }

    check() {
        console.log('check', this.isLoggedIn);
        //this.isLoggedIn = true;
        return this.isLoggedIn;
    }

    login(user: User, remember: Boolean, returnUrl: string, errCb: Function) {
        console.log('post request');
        const authorization = btoa(user.userName + ':' + user.password);
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' + authorization
            })
        };
        this.httpClient.get(environment.host + '/users', httpOptions) //, { username: user.email, password: user.password*/ }
            .subscribe(data => {
                //if (data['status'] === 'success') {
                this.loggedUser = {
                    //id: data['user'],
                    email: user.userName,
                };
                //const token = data['token'];
                localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
                localStorage.setItem('authorization', authorization);
                this.router.navigate([returnUrl]);
                this.isLoggedIn = true;
                //}
            }, err => {
                errCb();
            });
    }

    logout() {
        this.isLoggedIn = false;

        localStorage.removeItem('currentUser');
        localStorage.removeItem('authorization');

        this.router.navigate(['/auth/login']);
    }
}
