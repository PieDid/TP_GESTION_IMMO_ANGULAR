import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /**
   * ctor : injection de la classe Router pour la navigation impérative
   */
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

 

  /**
   * méthode appelée au click du lien 'iTunes Search App' de header.component.html
   */
  goAccueil(){
    this.router.navigate(["accueil"]);
  } // end goAccueil()


}
