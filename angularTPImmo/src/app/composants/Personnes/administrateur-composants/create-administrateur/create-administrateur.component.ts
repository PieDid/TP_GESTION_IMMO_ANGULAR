import { Component, OnInit, NgModule } from '@angular/core';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from 'src/app/material/material.module'; */
import {FormControl, Validators} from '@angular/forms';
/* import {MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */
import { IAdministrateur } from '../../../../modele/IAdministrateur';
import { AdressePersonneService } from '../../../../services/adresse-personne.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdministrateurService } from '../../../../services/administrateur.service';

@Component({
  selector: 'app-create-administrateur',
  templateUrl: './create-administrateur.component.html',
  styleUrls: ['./create-administrateur.component.css']
})
export class CreateAdministrateurComponent implements OnInit {


  administrateur : IAdministrateur = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null};

  /* bricolage d'André */
  adresse: any;

  //prop : pour la gestion de l'aperçu de l'image
  previewPhoto : boolean = false;

  constructor(private router : Router, 
              private administrateurService : AdministrateurService, 
              private adressePersonneService : AdressePersonneService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route administrateurEdit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findAdministrateurById() avec la valeur du param pour la récup du client à modifier
        this.findAdministrateurById(id);
      }
    );
  }

  //méthode pour la gestion de l'aperçu de la photo
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  /**
   * > sera invoquée à la soumission du formulaire de create-administrateur.component.html
   *    -> lors de l'ajout.
   *    -> lors de la modification du administrateur
   * > appel le service AdministrateurService pour l'ajout du administrateur
   */
  saveOrUpdateAdministrateur(){

    //--> test du administrateur à ajouter ou à modifier
    if(this.administrateur.identifiant == null){
      //--------- nouveau administrateur -----------//
      console.log("1-ID de l'adresse : "+ this.adresse);
      this.adressePersonneService.findAdressePersonneById(this.adresse).subscribe(
        (adresse) => { this.administrateur.adresseP = adresse; console.log("1-ID de l'adressePersonne : "+ this.administrateur.adresseP.rue);}
      );

      //-> appel du service AdministrateurService pour l'ajout de l'administrateur
      this.administrateurService.ajouterAdministrateur(this.administrateur).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un administrateur -----------//
      //-> invocaion de la méthode du service modifierAdministrateur() pour la maj de l'administrateur
      this.administrateurService.modifierAdministrateur(this.administrateur).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des administrateurs via la route '/list'
    this.router.navigate(['administrateurList']);
    console.log(this.administrateur);
  }



  /**
   * permet de :
   *    -> cas id=0 : initialiser un objet vide pour l'ajout
   *    -> cas id !=0 : appel du service pour la récup de l'administrateur pour modif
   * @param idAdministrateur
   */
  findAdministrateurById(idAdministrateur : number){
    if(idAdministrateur == 0){
      //--------- ajout ----------//
      this.administrateur = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null};

    }else{
      //-------- modif ---------//
      this.administrateurService.findAdministrateurById(idAdministrateur).subscribe(
        (administrateurModif) => {this.administrateur = administrateurModif}
      );
    }
  }

  listAdministrateur() {
    this.router.navigate(['administrateurList']);
  } //end editAdministrateur

/*   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true; */

}
