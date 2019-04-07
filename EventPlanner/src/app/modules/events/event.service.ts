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

  getAll() {
    return this.http.get<Event[]>(this.hostUrl);
  }

  getById(id: number) {
    return this.http.get<Event>(this.hostUrl + id);
  }

  save(event: Event) {
    if (event.id) {
      return this.http.put(this.hostUrl + 'update/'+ event.id, event);
    }
    return this.http.post(this.hostUrl + 'create', event);
  }
}
