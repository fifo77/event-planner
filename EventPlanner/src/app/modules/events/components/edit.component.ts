import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { faCalendar, IconDefinition, faClosedCaptioning, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';
import { EventInvitation } from 'src/app/models/event.invitation';
import { ActivatedRoute } from '@angular/router';
import { EventTime } from 'src/app/models/event.time';
import { NgxUiLoaderService, Loader } from 'ngx-ui-loader';

@Component({
    templateUrl: '../views/edit.component.html'
})
export class EditComponent {
    event: Event = new Event(null);
    invitedUsers: User[];
    masterLoader: Loader;

    icons: Object = {
        "faCalendar": faCalendar,
        "faTimes": faTimes,
    }

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private modalService: NgbModal,
        private route: ActivatedRoute,
    ) {
        this.titleService.setTitle('New event');
        this.addDate();
        this.route.params.subscribe(params => {
            if (params.id) {
                this.eventService.getById(params.id).subscribe(event => {
                    this.event = new Event(event)
                    this.titleService.setTitle('Edit event #' + this.event.id);
                })
            }
        })
    }

    addDate() {
        const eventTime: EventTime = new EventTime();
        eventTime.timeStart = new Date();
        eventTime.timeEnd = new Date();
        this.event.eventTimes.push(new EventTime());
    }

    removeDate(index: number) {
        this.event.eventTimes.splice(index, 1);
    }

    removeInvitation(index: number) {
        this.event.eventInvitations.splice(index, 1);
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
        console.log(this.event);    
        this.eventService.save(this.event).subscribe(_ => {
            console.log('saved')
        });
    }
}