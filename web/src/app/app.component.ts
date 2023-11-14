import { Component } from '@angular/core';
import { AuthenticationService } from './users/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';

  constructor(loginPrd: AuthenticationService){}
}
