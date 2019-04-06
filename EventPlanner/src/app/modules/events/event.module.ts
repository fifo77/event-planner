import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EventService } from './event.service';
import { EventRoutes } from './event.route';
import { EditComponent } from './components/edit.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([EventRoutes]),
        FontAwesomeModule,
        NgbModule,
        NgbDatepickerModule,
        FormsModule,
        SharedModule
    ],
    declarations: [EditComponent],
    providers: [EventService]
})
export class EventModule {

}