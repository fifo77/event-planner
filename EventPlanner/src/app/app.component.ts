import { Component, LOCALE_ID, Inject } from '@angular/core';
import { faHome, faUser, faUserCircle, faPlus, faCalendarAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './modules/auth/auth.service';
import { Title } from '@angular/platform-browser';

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
    'faUserCircle': faUserCircle,
    'faPlus': faPlus,
    'faCalendarAlt': faCalendarAlt,
    'faCalendarPlus': faCalendarPlus,
  };

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'sk', label: 'Slovak' }
  ];
  
  constructor(
    public titleService: Title,
    public authService: AuthService,
    @Inject(LOCALE_ID) protected localeId: string
  ) {
    console.log(localeId);
    this.localeId = 'en';
   }

  ngOnInit() {
    this.authService.check();
  }

  changeLang(lang: string) {
    if (lang === 'sk') {
      localStorage.setItem('locale', 'sk');
    }

    if (lang === 'en') {
      localStorage.setItem('locale', 'en');
    }
    location.reload();
  }
}
