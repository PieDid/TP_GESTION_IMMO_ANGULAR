import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../services/client.service';
import { IClient } from '../../../../modele/IClient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  //prop : tableau de clients
  clients = [];


  /**
   * ctor du composant : 
   *    -> injection du service ClientService comme dépendance
   *    -> injection du router pour la redirection
   */
  constructor(private clientService : ClientService, private router : Router) { }

  /**
   * appel de la méthode getAllClients() à l'initialisation du composant
   */
  ngOnInit(): void {
    //rafraichissement de la page
    this.clientService.refreshNeeded.subscribe(
      () => { this.getAllClients(); }
    );
    this.getAllClients();
  }

  /**
   * récup de la liste des clients via le service
   */
  getAllClients(){

    //abonnement au service
    this.clientService.getAllClient().subscribe(
      data => this.clients = data
    );
  }


  /**
   * permet de supprimer un client via le service ClientService
   * @param client 
   */
  deleteClient(client : IClient){

    /**
     * la méthode filter() retourne un nouveau tableau contenant tous les 
     * éléments d'origine qui remplissent la condition déterminée par la 
     * fonction de rappel (l'expression lambda)
     */

    //abonnement au service ClientService
    this.clientService.supprimerClient(client).subscribe(
      () => { this.clients.filter(cl => cl != client); }
    );

  }



  /**
   * permet de naviguer vers 'edit/id' en ajoutant
   * l'id du client à cette route
   * @param idClient
   */
/*   editClient(idClient: number) {
    this.router.navigate(['edit/', idClient]);
  } */ //end editClient

}
