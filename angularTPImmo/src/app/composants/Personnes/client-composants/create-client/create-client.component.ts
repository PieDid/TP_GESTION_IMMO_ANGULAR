import { Component, OnInit, NgModule } from '@angular/core';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from 'src/app/material/material.module'; */
import {FormControl, Validators} from '@angular/forms';
/* import {MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */
import { IClient } from '../../../../modele/IClient';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../services/client.service';
import { AdressePersonneService } from '../../../../services/adresse-personne.service';
import { BienService } from '../../../../services/bien.service';
import { ContratVenteService } from '../../../../services/contrat-vente.service';
import { ContratLocationService } from '../../../../services/contrat-location.service';
import { VisiteService } from '../../../../services/visite.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

   //prop : un objet de type client vide
  //-> cet objet sera lié aux input du formulaire de create-client.component.html
  client : IClient = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adressePersonne:null,  photo:null, liste_visites:null, liste_contrats:null};

  /* bricolage d'André */
  /* adresse:any; */

  //prop : pour la gestion de l'aperçu de l'image
  previewPhoto : boolean = false;

 
  constructor(private router : Router, 
              private clientService : ClientService, 
              private adressePersonneService : AdressePersonneService,
              private activatedRoute : ActivatedRoute) { }

  /**
   * ngOnInit() :
   *    -> récup de l'id du client passé dans l'url
   */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findClientById() avec la valeur du param pour la récup du client à modifier
        this.findClientById(id);
      }
    );
  }

  //méthode pour la gestion de l'aperçu de la photo
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  /**
   * > sera invoquée à la soumission du formulaire de create-client.component.html
   *    -> lors de l'ajout.
   *    -> lors de la modification du client
   * > appel le service ClientService pour l'ajout du client
   */
  saveOrUpdateClient(){

    //--> test du client à ajouter ou à modifier
    if(this.client.identifiant == null){
      //--------- nouveau client -----------//
      //-> appel du service ClientService pour l'ajout du client
      this.clientService.ajouterClient(this.client).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un client -----------//
      /* console.log("1-ID de l'adresse : "+ this.adresse);
      this.adressePersonneService.findAdressePersonneById(this.adresse).subscribe(
        (adresse) => { this.client.adressePersonne = adresse; console.log("1-ID de l'adressePersonne : "+ this.client.adressePersonne.rue);}
      ); */

      //-> invocaion de la méthode du service modifierClient() pour la maj du client
      this.clientService.modifierClient(this.client).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des clients via la route '/list'
    this.router.navigate(['clientList']);
    console.log(this.client);
  }



  /**
   * permet de :
   *    -> cas id=0 : initialiser un objet vide pour l'ajout
   *    -> cas id !=0 : appel du service pour la récup du client pour modif
   * @param idClient
   */
  findClientById(idClient : number){
    if(idClient == 0){
      //--------- ajout ----------//
      this.client = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adressePersonne:null,  photo:null, liste_visites:null, liste_contrats:null};

    }else{
      //-------- modif ---------//
      this.clientService.findClientById(idClient).subscribe(
        (clientModif) => {this.client = clientModif}
      );
    }
  }

  listClient() {
    this.router.navigate(['clientList']);
  } //end editClient

/*   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true; */

}
