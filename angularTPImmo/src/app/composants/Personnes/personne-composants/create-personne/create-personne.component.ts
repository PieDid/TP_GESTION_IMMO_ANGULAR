import { Component, OnInit, NgModule } from '@angular/core';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from 'src/app/material/material.module'; */
import {FormControl, Validators} from '@angular/forms';
/* import {MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */
import { IPersonne } from '../../../../modele/IPersonne';
import { AdressePersonneService } from '../../../../services/adresse-personne.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from '../../../../services/personne.service';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {


  personne : IPersonne = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null};

  /* bricolage d'André */
  adresse: any;

  //prop : pour la gestion de l'aperçu de l'image
  previewPhoto : boolean = false;

  constructor(private router : Router, 
              private personneService : PersonneService, 
              private adressePersonneService : AdressePersonneService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route personneEdit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findPersonneById() avec la valeur du param pour la récup du client à modifier
        this.findPersonneById(id);
      }
    );
  }

  //méthode pour la gestion de l'aperçu de la photo
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  /**
   * > sera invoquée à la soumission du formulaire de create-personne.component.html
   *    -> lors de l'ajout.
   *    -> lors de la modification du personne
   * > appel le service PersonneService pour l'ajout du personne
   */
  saveOrUpdatePersonne(){

    //--> test du personne à ajouter ou à modifier
    if(this.personne.identifiant == null){
      //--------- nouveau personne -----------//
      console.log("1-ID de l'adresse : "+ this.adresse);
      this.adressePersonneService.findAdressePersonneById(this.adresse).subscribe(
        (adresse) => { this.personne.adresseP = adresse; console.log("1-ID de l'adressePersonne : "+ this.personne.adresseP.rue);}
      );

      //-> appel du service PersonneService pour l'ajout de l'personne
      this.personneService.ajouterPersonne(this.personne).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un personne -----------//
      //-> invocaion de la méthode du service modifierPersonne() pour la maj de l'personne
      this.personneService.modifierPersonne(this.personne).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des personnes via la route '/list'
    this.router.navigate(['personneList']);
    console.log(this.personne);
  }



  /**
   * permet de :
   *    -> cas id=0 : initialiser un objet vide pour l'ajout
   *    -> cas id !=0 : appel du service pour la récup de l'personne pour modif
   * @param idPersonne
   */
  findPersonneById(idPersonne : number){
    if(idPersonne == 0){
      //--------- ajout ----------//
      this.personne = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adresseP:null,  photo:null};

    }else{
      //-------- modif ---------//
      this.personneService.findPersonneById(idPersonne).subscribe(
        (personneModif) => {this.personne = personneModif}
      );
    }
  }

  listPersonne() {
    this.router.navigate(['personneList']);
  } //end editPersonne

/*   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true; */

}
