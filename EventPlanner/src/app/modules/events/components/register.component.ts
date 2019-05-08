import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event.model';
import { EventTime, ATTENDANCE } from 'src/app/models/event.time';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { UserEventTime } from 'src/app/models/user.event.time';

class AttendanceUser {
    user: Object;
    eventTimes: EventTime[];

    constructor(user: Object) {
        this.user = user;
    }
}

@Component({
    templateUrl: '../views/register.component.html'
})
export class RegisterComponent {
    event: Event = new Event();
    attendanceConst: Object = ATTENDANCE;

    attendanceUsers: AttendanceUser[] = [];

    constructor(
        private titleService: Title,
        private eventService: EventService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private authService: AuthService
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

    addYourself() {
        const userEventTime: UserEventTime = new UserEventTime();
        this.attendanceUsers.push(new AttendanceUser(this.authService.loggedUser));
        userEventTime.eventTime = 
        //this.event.userEventTimes.push();
        console.log(this.authService.loggedUser);
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