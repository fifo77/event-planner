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
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class AttendanceUser {
    user: Object;
    userEventTimes: Object = {};

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

    canAddYourself: Boolean = true;

    icons: Object = {
        'faClose': faTimesCircle,
      };

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
        this.attendanceUsers.push(new AttendanceUser(this.authService.loggedUser));
        this.canAddYourself = false;
    }

    removeYourself(attendanceUser: AttendanceUser) {
        this.attendanceUsers = this.attendanceUsers.filter(attendance => attendance.user != attendanceUser.user);
        this.canAddYourself = true;
    }

    addAttendance(attendanceUser: AttendanceUser, time: EventTime) {
        const userEvent: UserEventTime = new UserEventTime();
        //userEvent.user = attendanceUser.user;
        userEvent.eventTime = time;
        attendanceUser.userEventTimes[time.id] = userEvent;
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