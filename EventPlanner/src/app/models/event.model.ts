import { User } from './user.model';
import { EventInvitation } from './event.invitation';
import { EventTime } from './event.time';

export class Event {
    id: Number;
    organisator: User;
    name: String;
    description: String;
    closedEvent: Boolean;

    eventTimes: EventTime[] = [];
    eventInvitations: EventInvitation[] = [];

    constructor(event: Event = null) {
        if (!event) {
            return
        }
        this.id = event.id
        this.organisator = event.organisator;
        this.name = event.name;
        this.description = event.description;
        this.closedEvent = event.closedEvent;
        this.eventTimes = event.eventTimes ? event.eventTimes.map(time => new EventTime(time)) : [];
        this.eventInvitations = event.eventInvitations ? event.eventInvitations : [];
    }
}