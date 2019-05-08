import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export const ATTENDANCE = {
    UNSET: 0,
    VISIT: 1
}

export class EventTime {
    id: Number;
    event: Event;
    timeStart: Date;
    timeEnd: Date;
    capacity: Number;

    attendance: Object = {};

    ngbDate: NgbDate = new NgbDate(2019, 10, 10);
    
    constructor(time: EventTime = null) {
        if (time) {
            this.id = time.id;
            this.event = time.event;
            this.timeStart = new Date(time.timeStart);
            this.timeEnd = new Date(time.timeEnd);
            this.ngbDate = new NgbDate(this.timeStart.getFullYear(), this.timeStart.getMonth(), this.timeStart.getDate());
            this.capacity = time.capacity;
        }
    }

    getAttendanceCount() {
        let count = 0;
        for (let key in this.attendance) {
            if (this.attendance[key] == ATTENDANCE.VISIT) {
                count++;
            }
        }
        return count;
    }
}