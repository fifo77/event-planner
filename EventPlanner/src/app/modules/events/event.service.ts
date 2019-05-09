/**
 * Created by kubos on 14. 3. 2019.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from 'src/app/models/event.model';
import { UserEventTime } from 'src/app/models/user.event.time';
import { EventTime } from 'src/app/models/event.time';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  private hostUrl = environment.host + '/events/';

  getAll() {
    return this.http.get<Event[]>(this.hostUrl);
  }

  getById(id: number) {
    return this.http.get<Event>(this.hostUrl + id);
  }

  getByInvitedUser(id: number) {
    return this.http.get<Event[]>(this.hostUrl + 'get_by_invited_user/' + id);
  }

  save(event: Event) {
    if (event.id) {
      return this.http.put(this.hostUrl + 'update/'+ event.id, event);
    }
    return this.http.post(this.hostUrl + 'create', event);
  }
}

@Injectable()
export class EventTimeService {

  constructor(private http: HttpClient) { }

  private hostUrl = environment.host + '/event_times/';

  getAll() {
    return this.http.get<EventTime[]>(this.hostUrl);
  }

  getById(id: number) {
    return this.http.get<EventTime>(this.hostUrl + id);
  }

  save(event: EventTime) {
    return this.http.post(this.hostUrl + 'create', event);
  }
}


@Injectable()
export class UserEventTimeService {

  constructor(private http: HttpClient) { }

  private hostUrl = environment.host + '/user_event_times/';

  getByEventTimeId(id: number) {
    return this.http.get<EventTime>(this.hostUrl + 'get_by_event_time/' + id);
  }

  save(userEventTime: UserEventTime) {
    console.log('afoj', userEventTime);
    return this.http.post(this.hostUrl + 'create', userEventTime);
  }
}