import { Component, OnInit } from '@angular/core';
import { EntrepotService } from 'src/app/services/entrepot.service'
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IEntrepot } from 'src/app/modele/IEntrepot';

@Component({
  selector: 'app-liste-entrepots',
  templateUrl: './liste-entrepots.component.html',
  styleUrls: ['./liste-entrepots.component.css'],
  providers:[NgbRatingConfig]
})
export class ListeEntrepotsComponent implements OnInit {

  private _entrepots = [];

  ratingMin = 1;
  ratingMax = 5;
  
  prixMin = 0;
  prixMax = 1E100;

  
  public get entrepots() {
    return this._entrepots;
  }

  public set entrepots(value) {
    this._entrepots = value;
  }

  constructor( private entrepotService : EntrepotService, config: NgbRatingConfig, private router : Router) { 
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    //rafraichissement de la page
    this.entrepotService.refreshNeeded.subscribe(
      () => { this.getAllEntrepots(); }
    );
    this.getAllEntrepots();
  } // end ngOnInit()


  getAllEntrepots(){
    this.entrepotService.getAllEntrepot().subscribe(
      data => {this.entrepots = data} );
  }

  editEntrepot(id_bien : number){
    this.router.navigate(['entrepot/',id_bien]);
  }

  deleteEntrepot(entrepot : IEntrepot){

    this.entrepotService.supprimerEntrepot(entrepot).subscribe(
      () => {this.entrepots.filter(comm => comm != entrepot);}
    )

  }

} // end class
