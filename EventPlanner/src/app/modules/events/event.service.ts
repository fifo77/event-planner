/**
 * Created by kubos on 14. 3. 2019.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from 'src/app/models/event.model';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  private hostUrl = environment.host + '/events/';

  save(event: Event) {
    return this.http.post(this.hostUrl + 'create', event);
  }
}
