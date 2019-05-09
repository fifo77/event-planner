import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.component.html',
    styleUrls: ['../styles/login.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    remember: Boolean = false;
    loading = false;
    returnUrl: string;

    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) {
        this.titleService.setTitle('Prihláste sa');
    }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/'])
        }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authService.login(this.user, this.remember, this.returnUrl, () => {
            this.toastr.error('Prihlasovacie údaje sú nesprávne', 'Chyba!');

            this.user.password = '';
            this.loading = false;
        });
    }

}
