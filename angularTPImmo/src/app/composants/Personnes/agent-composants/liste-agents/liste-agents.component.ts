import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../../services/agent.service';
import { IAgent } from '../../../../modele/IAgent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-agents',
  templateUrl: './liste-agents.component.html',
  styleUrls: ['./liste-agents.component.css']
})
export class ListeAgentsComponent implements OnInit {

  //prop : tableau d'agents
  agents = [];

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;


  constructor(private agentService : AgentService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.agentService.refreshNeeded.subscribe(
      () => { this.getAllAgents(); }
    );
    this.getAllAgents();
  }


  /**
   * récup de la liste des agents via le service
   */
  getAllAgents(){

    //abonnement au service
    this.agentService.getAllAgent().subscribe(
      data => this.agents = data
    );
  }


  /**
   * permet de supprimer un agent via le service AgentService
   * @param agent 
   */
  deleteAgent(agent : IAgent){

    //abonnement au service AgentService
    this.agentService.supprimerAgent(agent).subscribe(
      () => { this.agents.filter(cl => cl != agent); }
    );

  }



  /**
   * permet de naviguer vers 'edit/id' en ajoutant
   * l'id de l'agent à cette route
   * @param idAgent
   */
  editAgent(idAgent: number) {
    this.router.navigate(['agentEdit/', idAgent]);
  } //end editAgent

  //méthode pour la gestion de l'aperçu des infos
  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

  //méthode pour la pop-up
  /* openModal(liste_visites : IAgent["liste_visites"]){
    document.getElementById("modal").style.top = "0px";
  } */


}
