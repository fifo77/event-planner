import { Route } from '@angular/router';
import { UserComponent } from './components/user.component';
import { AuthGuard } from '../auth/auth.guard';
import { AddUserComponent } from './components/add-user.component';

export const UserRoutes: Route = {
    path: 'users', canActivate: [AuthGuard], children: [
        { path: '', component: UserComponent },
        { path: 'new', component: AddUserComponent },
    ]
}