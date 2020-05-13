import { Component, OnInit, NgModule } from '@angular/core';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from 'src/app/material/material.module'; */
import {FormControl, Validators} from '@angular/forms';
/* import {MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */
import { IAgent } from '../../../../modele/IAgent';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from '../../../../services/agent.service';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {


  agent : IAgent = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adressePersonne:null,  photo:null, listeVisite:null, listeContrat:null};

  //prop : pour la gestion de l'aperçu de l'image
  previewPhoto : boolean = false;

  constructor(private router : Router, 
              private agentService : AgentService, 
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route agentEdit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findAgentById() avec la valeur du param pour la récup du client à modifier
        this.findAgentById(id);
      }
    );
  }

  //méthode pour la gestion de l'aperçu de la photo
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  /**
   * > sera invoquée à la soumission du formulaire de create-agent.component.html
   *    -> lors de l'ajout.
   *    -> lors de la modification du agent
   * > appel le service AgentService pour l'ajout du agent
   */
  saveOrUpdateAgent(){

    //--> test du agent à ajouter ou à modifier
    if(this.agent.identifiant == null){
      //--------- nouveau agent -----------//
      //-> appel du service AgentService pour l'ajout de l'agent
      this.agentService.ajouterAgent(this.agent).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'un agent -----------//
      //-> invocaion de la méthode du service modifierAgent() pour la maj de l'agent
      this.agentService.modifierAgent(this.agent).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des agents via la route '/list'
    this.router.navigate(['agentList']);
    console.log(this.agent);
  }



  /**
   * permet de :
   *    -> cas id=0 : initialiser un objet vide pour l'ajout
   *    -> cas id !=0 : appel du service pour la récup de l'agent pour modif
   * @param idAgent
   */
  findAgentById(idAgent : number){
    if(idAgent == 0){
      //--------- ajout ----------//
      this.agent = {identifiant:null, nom:null, email:null, motDePasse:null, statut:null, adressePersonne:null,  photo:null, listeVisite:null, listeContrat:null};

    }else{
      //-------- modif ---------//
      this.agentService.findAgentById(idAgent).subscribe(
        (agentModif) => {this.agent = agentModif}
      );
    }
  }

  listAgent() {
    this.router.navigate(['agentList']);
  } //end editAgent

/*   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true; */

}
