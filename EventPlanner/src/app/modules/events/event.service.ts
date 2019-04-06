/**
 * Created by kubos on 14. 3. 2019.
 */
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class EventService {

  constructor(private http:HttpClient, private cookieService: CookieService) {}

  private hostUrl = environment.host + '/events/';
}
