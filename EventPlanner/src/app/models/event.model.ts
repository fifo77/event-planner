import { User } from './user.model';
import { EventInvitation } from './event.invitation';
import { EventTime } from './event.time';

export class Event {
    id: Number;
    organisator: User;
    name: String;
    description: String;
    closedEvent: Boolean;

    eventTime: EventTime[];
    eventInvitations: EventInvitation[];
}