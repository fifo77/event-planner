import { User } from './user.model';

export class EventInvitation {
    id: Number;
    user: User;
    event: Event;
    required_attendance: Number;
}