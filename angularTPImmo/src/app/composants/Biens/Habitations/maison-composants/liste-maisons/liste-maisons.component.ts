import { Component, OnInit } from '@angular/core';
import { MaisonService } from 'src/app/services/maison.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IMaison } from 'src/app/modele/IMaison';

@Component({
  selector: 'app-liste-maisons',
  templateUrl: './liste-maisons.component.html',
  styleUrls: ['./liste-maisons.component.css'],
  providers:[NgbRatingConfig]
})
export class ListeMaisonsComponent implements OnInit {

  private _maisons = [];

  public get maisons() {
    return this._maisons;
  }
  public set maisons(value) {
    this._maisons = value;
  }

  ratingMin = 1;
  ratingMax = 5;
  
  prixMin = 0;
  prixMax = 1E100;

  
  constructor(private maisonService : MaisonService, config: NgbRatingConfig, private router : Router) {
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
   }

   ngOnInit(): void {
    //rafraichissement de la page
    this.maisonService.refreshNeeded.subscribe(
      () => { this.getAllMaisons(); }
    );
    this.getAllMaisons();
  } // end ngOnInit()


  getAllMaisons(){
    this.maisonService.getAllMaison().subscribe(
      data => {this.maisons = data} );
  }

  editMaison(id_bien : number){
    this.router.navigate(['maison/',id_bien]);
  }

  deleteMaison(maison : IMaison){

    this.maisonService.supprimerMaison(maison).subscribe(
      () => {this.maisons.filter(m => m != maison);}
    )

  }

}
