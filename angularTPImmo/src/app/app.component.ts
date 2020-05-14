import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularTPImmo';

  private roles: string[];
  isLoggedIn = false;
  public showAdmin = false;
  public showClient = false;
  public showProp = false;
  public showAgent = false;
  public showLoc = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.showClient = this.roles.includes('ROLE_CLIENT');
      this.showProp = this.roles.includes('ROLE_PROP');
      this.showAgent = this.roles.includes('ROLE_AGENT');
      this.showLoc = this.roles.includes('ROLE_LOC');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
 