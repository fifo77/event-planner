import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: '../views/logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
