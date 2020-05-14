import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from '../../../../services/proprietaire.service';
import { IProprietaire } from '../../../../modele/IProprietaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-proprietaires',
  templateUrl: './liste-proprietaires.component.html',
  styleUrls: ['./liste-proprietaires.component.css']
})
export class ListeProprietairesComponent implements OnInit {

  //prop : tableau d'proprietaires
  proprietaires = [];

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor(private proprietaireService : ProprietaireService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.proprietaireService.refreshNeeded.subscribe(
      () => { this.getAllProprietaires(); }
    );
    this.getAllProprietaires();
  }

  /**
   * récup de la liste des proprietaires via le service
   */
  getAllProprietaires(){

    //abonnement au service
    this.proprietaireService.getAllProprietaire().subscribe(
      data => this.proprietaires = data
    );
  }


  /**
   * permet de supprimer un proprietaire via le service ProprietaireService
   * @param proprietaire 
   */
  deleteProprietaire(proprietaire : IProprietaire){

    //abonnement au service ProprietaireService
    this.proprietaireService.supprimerProprietaire(proprietaire).subscribe(
      () => { this.proprietaires.filter(cl => cl != proprietaire); }
    );

  }



  /**
   * permet de naviguer vers 'edit/id' en ajoutant
   * l'id du proprietaire à cette route
   * @param idProprietaire
   */
  editProprietaire(idProprietaire: number) {
    this.router.navigate(['proprietaireEdit/', idProprietaire]);
  } //end editProprietaire

  //méthode pour la gestion de l'aperçu des infos
  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

  //méthode pour la pop-up
  /* openModal(liste_visites : IProprietaire["liste_visites"]){
    document.getElementById("modal").style.top = "0px";
  } */

}
