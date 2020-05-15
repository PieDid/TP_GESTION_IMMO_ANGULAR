import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../../../services/personne.service';
import { IPersonne } from '../../../../modele/IPersonne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {

  //prop : tableau d'personnes
  personnes = [];

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor(private personneService : PersonneService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.personneService.refreshNeeded.subscribe(
      () => { this.getAllPersonnes(); }
    );
    this.getAllPersonnes();
  }

  /**
   * récup de la liste des personnes via le service
   */
  getAllPersonnes(){

    //abonnement au service
    this.personneService.getAllPersonne().subscribe(
      data => this.personnes = data
    );
  }


  /**
   * permet de supprimer un personne via le service PersonneService
   * @param personne 
   */
  deletePersonne(personne : IPersonne){

    //abonnement au service PersonneService
    this.personneService.supprimerPersonne(personne).subscribe(
      () => { this.personnes.filter(cl => cl != personne); }
    );

  }



  /**
   * permet de naviguer vers 'edit/id' en ajoutant
   * l'id de l'personne à cette route
   * @param idAdministrateur
   */
  editAdministrateur(idAdministrateur: number) {
    this.router.navigate(['administrateurEdit/', idAdministrateur]);
  } //end editAdministrateur

  editAgent(idAgent: number) {
    this.router.navigate(['agentEdit/', idAgent]);
  } //end editAgent

  editClient(idClient: number) {
    this.router.navigate(['clientEdit/', idClient]);
  } //end editClient

  editProprietaire(idProprietaire: number) {
    this.router.navigate(['proprietaireEdit/', idProprietaire]);
  } //end editProprietaire

  //méthode pour la gestion de l'aperçu des infos
  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

  //méthode pour la pop-up
  /* openModal(liste_visites : IPersonne["liste_visites"]){
    document.getElementById("modal").style.top = "0px";
  } */

}
