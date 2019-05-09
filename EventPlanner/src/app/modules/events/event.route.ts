import { Route } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditComponent } from './components/edit.component';
import { ListComponent } from './components/list.component';
import { RegisterComponent } from './components/register.component';

export const EventRoutes: Route = {
    path: 'events', canActivate: [AuthGuard], children: [
        { path: '', component: ListComponent },
        { path: 'new', component: EditComponent },
        { path: 'edit/:id', component: EditComponent },
        { path: 'register/:id', component: RegisterComponent }
    ]
}