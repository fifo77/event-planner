import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { faCalendar, IconDefinition, faClosedCaptioning, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';
import { EventInvitation } from 'src/app/models/event.invitation';

@Component({
    templateUrl: '../views/edit.component.html'
})
export class EditComponent {
    event: Event = new Event();
    invitedUsers: User[];

    icons: Object = {
        "faCalendar": faCalendar,
        "faTimes": faTimes,
    }

    eventDates: NgbDate[] = []

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private modalService: NgbModal
    ) {
        this.titleService.setTitle('New event');
        this.addDate();
    }

    addDate() {
        this.eventDates.push(new NgbDate(2019, 10, 10))
    }

    removeDate(index: number) {
        this.eventDates.splice(index, 1);
    }

    openModal(content) {
        this.invitedUsers = []
        if (this.event.eventInvitations) {
            this.event.eventInvitations.map(invitation => this.invitedUsers.push(invitation.user))
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
            let invitations = []
            this.invitedUsers.map(user => invitations.push(new EventInvitation(user)));
            this.event.eventInvitations = invitations;
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    save() {
        console.log(this.event)
    }
}