import { Component } from '@angular/core';
import { faHome, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'eventplanner';
  icons: Object = {
    'faHome': faHome,
    'faUser': faUser,
    'faUserCircle': faUserCircle
  };

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.check();
  }
}
