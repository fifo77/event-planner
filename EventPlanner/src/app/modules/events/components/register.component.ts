import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event.model';
import { EventTime, ATTENDANCE } from 'src/app/models/event.time';
import { User } from 'src/app/models/user.model';

@Component({
    templateUrl: '../views/register.component.html'
})
export class RegisterComponent {
    event: Event = new Event();
    attendanceConst: Object = ATTENDANCE;

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private route: ActivatedRoute,
        private toastr: ToastrService
    ) {
        this.titleService.setTitle('Event registration')
        this.route.params.subscribe(params => {
            if (!params.id) {
                this.toastr.error('Cannot register to event!')
            }
            this.eventService.getById(params.id).subscribe(event => {
                this.event = new Event(event);
                console.log(this.event)
            })
        })
    }

    changeAttendance(time: EventTime, user: User) {
        if (time.getAttendanceCount() + 1 > time.capacity) {
            this.toastr.warning('Full capacity already!');
            return;
        }
        if (!time.attendance[user.id]) {
            time.attendance[user.id] = ATTENDANCE.VISIT;
        } else {
            time.attendance[user.id] = false;
        }
    }
}