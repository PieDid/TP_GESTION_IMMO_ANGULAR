import { Component, OnInit, NgModule } from '@angular/core';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from 'src/app/material/material.module'; */
import {FormControl, Validators} from '@angular/forms';
/* import {MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */
import { IProprietaire } from '../../../../modele/IProprietaire';
import { Router, ActivatedRoute } from '@angular/router';
import { ProprietaireService } from '../../../../services/proprietaire.service';
import { AdressePersonneService } from '../../../../services/adresse-personne.service';
import { BienService } from '../../../../services/bien.service';
import { ContratVenteService } from '../../../../services/contrat-vente.service';
import { ContratLocationService } from '../../../../services/contrat-location.service';
import { VisiteService } from '../../../../services/visite.service';

@Component({
  selector: 'app-create-proprietaire',
  templateUrl: './create-proprietaire.component.html',
  styleUrls: ['./create-proprietaire.component.css']
})
export class CreateProprietaireComponent implements OnInit {


  proprietaire : IProprietaire = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null, tel_prive:null, tel_travail:null, liste_biens:null, liste_contratsVente:null, liste_contratsLocation:null, liste_visites:null};
  /* bricolage d'André */
  adresse: any;

  //prop : pour la gestion de l'aperçu de l'image
  previewPhoto : boolean = false;

  constructor(private router : Router, 
              private proprietaireService : ProprietaireService, 
              private adressePersonneService : AdressePersonneService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route proprietaireEdit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findProprietaireById() avec la valeur du param pour la récup du client à modifier
        this.findProprietaireById(id);
      }
    );
  }

  //méthode pour la gestion de l'aperçu de la photo
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  /**
   * > sera invoquée à la soumission du formulaire de create-proprietaire.component.html
   *    -> lors de l'ajout.
   *    -> lors de la modification du proprietaire
   * > appel le service ProprietaireService pour l'ajout du proprietaire
   */
  saveOrUpdateProprietaire(){

    //--> test du proprietaire à ajouter ou à modifier
    if(this.proprietaire.identifiant == null){
      //--------- nouveau proprietaire -----------//
      //-> appel du service ProprietaireService pour l'ajout de l'proprietaire
      this.proprietaireService.ajouterProprietaire(this.proprietaire).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un proprietaire -----------//
      console.log("1-ID de l'adresse : "+ this.adresse);
      this.adressePersonneService.findAdressePersonneById(this.adresse).subscribe(
        (adresse) => { this.proprietaire.adresseP = adresse; console.log("1-ID de l'adressePersonne : "+ this.proprietaire.adresseP.rue);}
      );
      
      //-> invocaion de la méthode du service modifierProprietaire() pour la maj de l'proprietaire
      this.proprietaireService.modifierProprietaire(this.proprietaire).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des proprietaires via la route '/list'
    this.router.navigate(['proprietaireList']);
    console.log(this.proprietaire);
  }



  /**
   * permet de :
   *    -> cas id=0 : initialiser un objet vide pour l'ajout
   *    -> cas id !=0 : appel du service pour la récup de l'proprietaire pour modif
   * @param idProprietaire
   */
  findProprietaireById(idProprietaire : number){
    if(idProprietaire == 0){
      //--------- ajout ----------//
      this.proprietaire = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null, tel_prive:null, tel_travail:null, liste_biens:null, liste_contratsVente:null, liste_contratsLocation:null, liste_visites:null};

    }else{
      //-------- modif ---------//
      this.proprietaireService.findProprietaireById(idProprietaire).subscribe(
        (proprietaireModif) => {this.proprietaire = proprietaireModif}
      );
      /* this.adressePersonneService.findAdressePersonneById(idProprietaire).subscribe(
        (adressePersonneModif) => {this.proprietaire.adressePersonne = adressePersonneModif}
      ); */
      /* console.log("2-Valeur de l'adresse : "+this.proprietaire.adressePersonne); */
    }
  }

  listProprietaire() {
    this.router.navigate(['proprietaireList']);
  } //end editProprietaire

/*   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true; */

}
