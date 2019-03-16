import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/modules/auth/auth.guard';
import { AuthRoute } from './auth.route';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([AuthRoute])
    ],
    declarations: [LoginComponent, LogoutComponent],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {
}
