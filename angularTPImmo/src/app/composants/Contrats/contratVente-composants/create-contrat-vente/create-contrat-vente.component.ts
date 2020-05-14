import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IContratVente } from 'src/app/modele/IContratVente'
import { ContratVenteService } from 'src/app/services/contrat-vente.service'
@Component({
  selector: 'app-create-contrat-vente',
  templateUrl: './create-contrat-vente.component.html',
  styleUrls: ['./create-contrat-vente.component.css']
})
export class CreateContratVenteComponent implements OnInit {

  contratVente: IContratVente = { idContrat: null, date: null, bien: null, agent: null, proprietaire: null, client: null, prix: null, etat: null };

  /*  
    idContrat : number;
      date : string;
      bien : IBien;
      agent : IAgent;
      proprietaire : IProprietaire;
      client : IClient; 
    prix : number;
      etat : string; */

  constructor(private router: Router, private contratVenteService: ContratVenteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findClientById() avec la valeur du param pour la récup du client à modifier
        this.findContratVenteById(id);
      });
  }

  findContratVenteById(idContrat: number) {
    if (idContrat == 0) {
      //--------- ajout ----------//
      this.contratVente = { idContrat: null, date: null, bien: null, agent: null, proprietaire: null, client: null, prix: null, etat: null };

    } else {
      //-------- modif ---------//
      this.contratVenteService.findContratVenteById(idContrat).subscribe(
        (contratModif) => { this.contratVente = contratModif }
      );
    }
  }

  listContratVente() {
    this.router.navigate(['contratVenteList']);
  } 


  saveOrUpdateContratVente(){

    //--> test du client à ajouter ou à modifier
    if(this.contratVente.idContrat == null){
      //--------- nouveau client -----------//
      //-> appel du service ClientService pour l'ajout du client
      this.contratVenteService.ajouterContratVente(this.contratVente).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un client -----------//
      //-> invocation de la méthode du service modifierClient() pour la maj du client
      this.contratVenteService.modifierContratVente(this.contratVente).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des clients via la route '/list'
    this.router.navigate(['contratVenteList']);
    console.log(this.contratVente);
  }



}
