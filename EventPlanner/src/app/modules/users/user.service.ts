/**
 * Created by kubos on 14. 3. 2019.
 */
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  constructor(private http:HttpClient, private cookieService: CookieService) {}

  private userUrl = environment.host + '/users/';

  public getUsers() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<User[]>(this.userUrl, { headers: headers, withCredentials: true });
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
