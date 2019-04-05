import { Route } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './components/dashboard.component';

export const DashboardRoutes: Route = {
    path: 'dashboard', canActivate: [AuthGuard], children: [
        {path: '', component: DashboardComponent}
    ]
}