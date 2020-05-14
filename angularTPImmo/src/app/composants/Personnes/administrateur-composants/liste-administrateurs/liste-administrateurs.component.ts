import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../../../../services/administrateur.service';
import { IAdministrateur } from '../../../../modele/IAdministrateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-administrateurs',
  templateUrl: './liste-administrateurs.component.html',
  styleUrls: ['./liste-administrateurs.component.css']
})
export class ListeAdministrateursComponent implements OnInit {

  //prop : tableau d'administrateurs
  administrateurs = [];

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor(private administrateurService : AdministrateurService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.administrateurService.refreshNeeded.subscribe(
      () => { this.getAllAdministrateurs(); }
    );
    this.getAllAdministrateurs();
  }

  /**
   * récup de la liste des administrateurs via le service
   */
  getAllAdministrateurs(){

    //abonnement au service
    this.administrateurService.getAllAdministrateur().subscribe(
      data => this.administrateurs = data
    );
  }


  /**
   * permet de supprimer un administrateur via le service AdministrateurService
   * @param administrateur 
   */
  deleteAdministrateur(administrateur : IAdministrateur){

    //abonnement au service AdministrateurService
    this.administrateurService.supprimerAdministrateur(administrateur).subscribe(
      () => { this.administrateurs.filter(cl => cl != administrateur); }
    );

  }



  /**
   * permet de naviguer vers 'edit/id' en ajoutant
   * l'id de l'administrateur à cette route
   * @param idAdministrateur
   */
  editAdministrateur(idAdministrateur: number) {
    this.router.navigate(['administrateurEdit/', idAdministrateur]);
  } //end editAdministrateur

  //méthode pour la gestion de l'aperçu des infos
  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

  //méthode pour la pop-up
  /* openModal(liste_visites : IAdministrateur["liste_visites"]){
    document.getElementById("modal").style.top = "0px";
  } */

}
