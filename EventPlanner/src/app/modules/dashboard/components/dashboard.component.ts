import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../../events/event.service';
import { AuthService } from '../../auth/auth.service';
import { Event } from 'src/app/models/event.model';

@Component({
    templateUrl: '../views/dashboard.component.html'
})
export class DashboardComponent {
    upcomingEvents: Event[] = [];
    invitedEvents: Event[] = [];
    userEvents: Event[] = [];

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private authService: AuthService
    ) {
        this.titleService.setTitle('Dashboard');
        this.eventService.getUpcoming().subscribe(events => {
            this.upcomingEvents = events;
        });
        this.eventService.getByInvitedUser(this.authService.loggedUser.id).subscribe(events => {
            this.invitedEvents = events;
        });
    }
}