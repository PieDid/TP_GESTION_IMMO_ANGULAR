import { Component, OnInit } from '@angular/core';
import { CommerceService } from 'src/app/services/commerce.service'
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ICommerce } from 'src/app/modele/ICommerce';

@Component({
  selector: 'app-liste-commerces',
  templateUrl: './liste-commerces.component.html',
  styleUrls: ['./liste-commerces.component.css'],
  providers:[NgbRatingConfig]
})
export class ListeCommercesComponent implements OnInit {

  private _commerces = [];

  public get commerces() {
    return this._commerces;
  }

  public set commerces(value) {
    this._commerces = value;
  }

  constructor( private commerceService : CommerceService, config: NgbRatingConfig, private router : Router) { 
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    //rafraichissement de la page
    this.commerceService.refreshNeeded.subscribe(
      () => { this.getAllCommerces(); }
    );
    this.getAllCommerces();
  } // end ngOnInit()


  getAllCommerces(){
    this.commerceService.getAllCommerce().subscribe(
      data => {this.commerces = data} );
  }

  editCommerce(id_bien : number){
    this.router.navigate(['commerce/',id_bien]);
  }

  deleteCommerce(commerce : ICommerce){

    this.commerceService.supprimerCommerce(commerce).subscribe(
      () => {this.commerces.filter(comm => comm != commerce);}
    )

  }

} // end class
