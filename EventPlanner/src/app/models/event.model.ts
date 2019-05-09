import { User } from './user.model';
import { EventInvitation } from './event.invitation';
import { EventTime } from './event.time';
import { UserEventTime } from './user.event.time';

export class Event {
    id: Number;
    organisator: User;
    name: string;
    description: String;
    closedEvent: Boolean;

    eventTimes: EventTime[] = [];
    eventInvitations: EventInvitation[] = [];

    userEventTimes: UserEventTime[] = [];

    constructor(event: Event = null) {
        if (!event) {
            return
        }
        this.id = event.id
        this.organisator = event.organisator;
        this.name = event.name;
        this.description = event.description;
        this.closedEvent = event.closedEvent;
        //console.log(event.eventTimes);
        this.eventTimes = event.eventTimes ? event.eventTimes.map(time => new EventTime(time)) : [];
        //console.log(this.eventTimes);
        this.eventInvitations = event.eventInvitations ? event.eventInvitations : [];
        this.userEventTimes = event.userEventTimes ? event.userEventTimes : [];
    }
}