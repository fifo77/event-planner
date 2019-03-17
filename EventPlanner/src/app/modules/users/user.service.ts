/**
 * Created by kubos on 14. 3. 2019.
 */
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = environment.host + '/api/users/';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
