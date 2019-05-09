import { Route } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';

export const AuthRoute: Route = {
    path: 'auth', children: [
        {path: 'login', component: LoginComponent},
        {path: 'logout', component: LogoutComponent}, //, canActivate: [AuthGuard]
    ]
};
