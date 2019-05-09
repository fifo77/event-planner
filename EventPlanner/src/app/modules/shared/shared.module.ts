import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventCalendarComponent } from './event.calendar/event.calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { UserSelectComponent } from './users.select/user.select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        })
    ],
    declarations: [
        EventCalendarComponent,
        UserSelectComponent
    ],
    exports: [
        EventCalendarComponent,
        UserSelectComponent
    ]
})
export class SharedModule {

}