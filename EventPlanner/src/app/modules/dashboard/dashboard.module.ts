import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.route';
import { DashboardComponent } from './components/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([DashboardRoutes]),
        SharedModule
    ],
    declarations: [DashboardComponent],
    providers: []
})
export class DashboardModule {

}