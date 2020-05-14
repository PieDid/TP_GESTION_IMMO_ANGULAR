import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  public showAdmin = false;
  public showClient = false;
  public showProp = false;
  public showAgent = false;
  public showLoc = false;
  username: string;

 /**
   * ctor : injection de la classe Router pour la navigation impérative
   */
  constructor(private router : Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

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

 

  /**
   * méthode appelée au click du lien 'iTunes Search App' de header.component.html
   */
  goAccueil(){
    this.router.navigate(["accueil"]);
  } // end goAccueil()


}
