import { Component } from "@angular/core";

@Component({
    selector: 'event',
    templateUrl: 'event.calendar.component.html'
})
export class EventCalendarComponent {
    viewDate: Date;

    constructor() {
        this.viewDate = new Date()
    }
}