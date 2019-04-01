/**
 * Created by kubos on 14. 3. 2019.
 */
import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: '../views/add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(_ => {
        this.toastr.success("User created successfully.", "Success!")
      });

  };

}
