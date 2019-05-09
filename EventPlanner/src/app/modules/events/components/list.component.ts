import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { Event } from 'src/app/models/event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: '../views/list.component.html'
})
export class ListComponent {
    events: Event[] = [];

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private toastr: ToastrService
    ) {
        this.titleService.setTitle('List events')
        this.eventService.getAll().subscribe(events => {
            this.events = events;
        });
    }

    delete(id: number) {
        if (confirm('Do you really want to delete event?')) {
            this.eventService.delete(id).subscribe(_ => {
                this.events = this.events.filter(event => event.id != id);
                this.toastr.success('Event deleted');
            });
        }

    }
}