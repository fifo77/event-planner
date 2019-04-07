import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { Event } from 'src/app/models/event.model';

@Component({
    templateUrl: '../views/list.component.html'
})
export class ListComponent {
    events: Event[] = [];

    constructor(
        private titleService: Title,
        private eventService: EventService
    ) {
        this.titleService.setTitle('List events')
        this.eventService.getAll().subscribe(events => {
            this.events = events;
        });
    }
}