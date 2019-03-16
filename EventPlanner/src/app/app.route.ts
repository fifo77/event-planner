import { Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';
import { ErrorComponent } from './error.component';

export const AppRoutes: Routes = [
  // main routes
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: '**', component: ErrorComponent, canActivate: [AuthGuard]}
];
