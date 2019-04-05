import { User } from './user.model';
import { EventTime } from './event.time';

export class UserEventTime {
    id: Number;
    user: User;
    eventTime: EventTime;
}