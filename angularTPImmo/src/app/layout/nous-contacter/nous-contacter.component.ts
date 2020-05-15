import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { IAgent } from 'src/app/modele/IAgent';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.component.html',
  styleUrls: ['./nous-contacter.component.css']
})
export class NousContacterComponent implements OnInit {

  agents = [];

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

}
