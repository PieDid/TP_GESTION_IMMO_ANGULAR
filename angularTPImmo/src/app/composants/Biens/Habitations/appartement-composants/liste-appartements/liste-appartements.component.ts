import { Component, OnInit } from '@angular/core';
import { AppartementService } from 'src/app/services/appartement.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IAppartement } from 'src/app/modele/IAppartement';

@Component({
  selector: 'app-liste-appartements',
  templateUrl: './liste-appartements.component.html',
  styleUrls: ['./liste-appartements.component.css'],
  providers:[NgbRatingConfig]
})
export class ListeAppartementsComponent implements OnInit {

  private _appartements = [];

  public get appartements() {
    return this._appartements;
  }
  public set appartements(value) {
    this._appartements = value;
  }

  ratingMin = 1;
  ratingMax = 5;
  
  prixMin = 0;
  prixMax = 1E100;

  
  constructor(private appartementService : AppartementService, config: NgbRatingConfig, private router : Router) {
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
   }

   ngOnInit(): void {
    //rafraichissement de la page
    this.appartementService.refreshNeeded.subscribe(
      () => { this.getAllAppartements(); }
    );
    this.getAllAppartements();
  } // end ngOnInit()


  getAllAppartements(){
    this.appartementService.getAllAppartement().subscribe(
      data => {this.appartements = data} );
  }

  editAppartement(id_bien : number){
    this.router.navigate(['appartement/',id_bien]);
  }

  deleteAppartement(appartement : IAppartement){

    this.appartementService.supprimerAppartement(appartement).subscribe(
      () => {this.appartements.filter(m => m != appartement);}
    )

  }

}
