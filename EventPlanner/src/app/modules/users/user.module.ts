import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.route';
import { UserComponent } from './components/user.component';
import { AddUserComponent } from './components/add-user.component';
import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([UserRoutes])
    ],
    declarations: [UserComponent, AddUserComponent],
    providers: [
        UserService
    ]
})
export class UserModule {

}