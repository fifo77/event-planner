import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { EventService, UserEventTimeService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event.model';
import { EventTime, ATTENDANCE } from 'src/app/models/event.time';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { UserEventTime } from 'src/app/models/user.event.time';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AttachSession } from 'protractor/built/driverProviders';

class AttendanceUser {
    user: User;
    userEventTimes: Object = {};

    constructor(user: User) {
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
        private eventTimeService: UserEventTimeService,
        private userEventTimeService: UserEventTimeService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private authService: AuthService,
    ) {
        this.titleService.setTitle('Event registration')
        this.route.params.subscribe(params => {
            if (!params.id) {
                this.toastr.error('Cannot register to event!')
            }
            this.eventService.getById(params.id).subscribe(event => {
                this.event = new Event(event);
                console.log('afoj', this.event);
                if (this.event.eventInvitations.filter(eventInvitation => eventInvitation.user.id == this.authService.loggedUser.id).length) {
                    this.canAddYourself = false;
                }
                for (let eventTime of this.event.eventTimes) {
                    this.userEventTimeService.getByEventTimeId(eventTime.id).subscribe(userEventTimes => {
                        for (let key of Object.keys(userEventTimes)) {
                            const userEventTime: UserEventTime = userEventTimes[key];
                            eventTime.attendance[userEventTime.user.id] = ATTENDANCE.VISIT;
                            const attendanceUser = this.attendanceUsers.filter(attandanceUser => attandanceUser.user.id == userEventTime.user.id);
                            if (attendanceUser.length) {
                                attendanceUser[0].userEventTimes[eventTime.id] = userEventTime;
                            } else {
                                const newAttandanceUser: AttendanceUser = new AttendanceUser(userEventTime.user);
                                newAttandanceUser.userEventTimes[eventTime.id] = userEventTime;
                                this.attendanceUsers.push(newAttandanceUser);
                            }

                            if (userEventTime.user.id == this.authService.loggedUser.id) {
                                this.canAddYourself = false;
                            }
                        }
                    });
                }
            });
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

    changeAttendance(attendanceUser: AttendanceUser, time: EventTime) {
        if (attendanceUser.userEventTimes[time.id]) {
            attendanceUser.userEventTimes[time.id] = null;
            return;
        }
        const userEvent: UserEventTime = new UserEventTime();
        //userEvent.user = attendanceUser.user;
        userEvent.eventTime = time;
        attendanceUser.userEventTimes[time.id] = userEvent;
    }

    changeInvitationAttendance(time: EventTime, user: User) {
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

    save() {
        let userEventTimes: UserEventTime[] = [];
        let curUserAttendance = this.attendanceUsers.filter(attendanceUser => attendanceUser.user.id == this.authService.loggedUser.id);
        if (curUserAttendance.length) {
            for (let key of Object.keys(curUserAttendance[0].userEventTimes)) {
                const userEventTime: UserEventTime = curUserAttendance[0].userEventTimes[key];
                userEventTime.user = this.authService.loggedUser;
                userEventTimes.push(userEventTime);
            }
            userEventTimes.map(userEventTime => {
                this.userEventTimeService.save(userEventTime).subscribe(_ => {

                });
            })
            //console.log(userEventTimes);
        }

        //this.eventService.saveEventTimes(this.authService.loggedUser, )
    }
}