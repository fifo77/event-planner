import { Route } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditComponent } from './components/edit.component';

export const EventRoutes: Route = {
    path: 'events', canActivate: [AuthGuard], children: [
        { path: 'new', component: EditComponent },
        { path: 'edit/:id', component: EditComponent }
    ]
}