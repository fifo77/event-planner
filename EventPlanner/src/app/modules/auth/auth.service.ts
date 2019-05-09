import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    loggedUser: User;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private userService: UserService
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
        this.httpClient.get<User[]>(environment.host + '/users', httpOptions) //, { username: user.email, password: user.password*/ }
            .subscribe(users => {
                //if (data['status'] === 'success') {
                if (users.filter(curUser => curUser.userName == user.userName).length) {
                    this.loggedUser = users.filter(curUser => curUser.userName == user.userName)[0];
                } else {
                    this.loggedUser = {
                        ...user,
                        id: 1,
                        email: user.userName
                    };
                }
                this.loggedUser.password = '';
                //console.log(this.loggedUser);
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
