import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../../events/event.service';

@Component({
    templateUrl: '../views/dashboard.component.html'
})
export class DashboardComponent {
    constructor(
        private titleService: Title,
        private eventService: EventService
    ) {
        this.titleService.setTitle('Dashboard');
    }
}