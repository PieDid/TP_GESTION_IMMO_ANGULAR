import { Component, OnInit } from '@angular/core';
import { StudioService } from 'src/app/services/studio.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IStudio } from 'src/app/modele/IStudio';

@Component({
  selector: 'app-liste-studios',
  templateUrl: './liste-studios.component.html',
  styleUrls: ['./liste-studios.component.css'],
  providers:[NgbRatingConfig]
})
export class ListeStudiosComponent implements OnInit {

  private _studios = [];

  public get studios() {
    return this._studios;
  }
  public set studios(value) {
    this._studios = value;
  }

  ratingMin = 1;
  ratingMax = 5;
  
  prixMin = 0;
  prixMax = 1E100;


  constructor(private studioService : StudioService, config: NgbRatingConfig, private router : Router) {
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
   }

   ngOnInit(): void {
    //rafraichissement de la page
    this.studioService.refreshNeeded.subscribe(
      () => { this.getAllStudios(); }
    );
    this.getAllStudios();
  } // end ngOnInit()


  getAllStudios(){
    this.studioService.getAllStudio().subscribe(
      data => {this.studios = data} );
  }

  editStudio(id_bien : number){
    this.router.navigate(['studio/',id_bien]);
  }

  deleteStudio(studio : IStudio){

    this.studioService.supprimerStudio(studio).subscribe(
      () => {this.studios.filter(m => m != studio);}
    )

  }

}
