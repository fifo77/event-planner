/**
 * Created by kubos on 14. 3. 2019.
 */
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: '../views/user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private titleService: Title
  ) {
    this.titleService.setTitle('User details');
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}
