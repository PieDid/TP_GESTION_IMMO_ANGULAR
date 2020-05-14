import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IClient } from '../modele/IClient';
import { Router } from '@angular/router';

/**
 * service http du client
 */
@Injectable({
  //permet de déclarer le service comme provider de manière transverse
  providedIn: 'root'
})

export class ClientService {

   //prop : URL de base du ws REST :
   private WS_REST_BASE_URL = "http://localhost:8080/TP_Spring_GestionImmobiliere/client-rest/client";


   //prop : objet de type de l'observable Subject pour rafraichir la page
  /**
   * Subject : est un Observable et un observeur, on peut s'abonner dessus mais
   *           égalament lui envoyer des valeurs
   */
    refreshNeeded = new Subject();


  /**
   * ctor du service
   *  -> injection du module HttpClient comme dépendance
   *  -> injection du Router comme dépendance pour la navigation
   */
    constructor(private httpClient : HttpClient, private router : Router) { }


    /**
   * récup de la liste des clients via le ws rest
   */
  getAllClient() : Observable<IClient[]>{

    //envoie d'une requete http GET vers le ws rest
    return this.httpClient.get<IClient[]>(`${this.WS_REST_BASE_URL}List`);
  }


  /**
   * permet d'ajouter un nouveau client via le web service REST
   * @param client : le client à ajouter
   */
  ajouterClient(client : IClient) : Observable<IClient>{
    /**
     *  > la méthode pipe() permet de faire des opérations (modifier et filtrer 
     *    les données) sur la réponse reçue
     *  > le traitement se fait via des opérateurs angular contenus dans 'rxjs/operators'
     *    Ex d'opérateurs: - map: permet d'exécuter une fonction qui prend des valeurs 
     *                            en entrée, les transforme et les renvoi en sortie
     *                     - filter: permet de filtrer les données. Ex: récup des employés 
     *                               avec salaire > 30000
     *                     - tap : exécute n'importe quel traitement
     *                     - reduce
     *                     - ...etc
     */
    //envoi d'une requête http en POST vers le ws rest pour l'ajout
    return this.httpClient.post<IClient>(`${this.WS_REST_BASE_URL}Add`, client)
                          .pipe(
                                tap(
                                    //next() : émet un évènement (notification) pour les composants qui vont s'abonner à 
                                    //         l'observable pour les informer de l'ajout d'un employé
                                    () => { this.refreshNeeded.next() }
                                )
                          );
  }


  /**
   * permet de supprimer un client via le ws rest
   * l'url de suppression : 
   *      http://localhost:8080/tp_gestion_immobiliere/client-rest/clientDelete/<id client>
   * @param client 
   */
  supprimerClient(client : IClient) : Observable<void>{

    //envoi d'une requête http en DELETE vers le ws rest
    /**
     * construction de l'URL avec la template string de typescript
     */
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${client.identifiant}` )
                          .pipe(
                                tap(
                                    //next() : émet un évènement (notification) pour les composants qui vont s'abonner à 
                                    //         l'observable pour les informer de la suppression d'un employé
                                    () => { this.refreshNeeded.next() }
                                )
                          );
  }


  /**
   * permet de naviguer vers 'edit/id' en ajoutant l'id du client 
   * à cette route.
   * @param idClient 
   */
  editClient(idClient : number){

    this.router.navigate(['clientEdit/', idClient]);
  }



  /**
   * permet de récupérer un client via son id du ws rest
   */
  findClientById(idClient : number) : Observable<IClient>{

    //invocation du ws rest avec une requete http GET
    return this.httpClient.get<IClient>(`${this.WS_REST_BASE_URL}/${idClient}` );
  }



  /**
   * permet de modifier un client via le ws rest.
   * url d'invocation du ws rest :
   *    http://localhost:8080/tp_gestion_immobiliere/client-rest/clientUpdate/<id client>
   */
  modifierClient(client : IClient) : Observable<void>{

    //invocation du ws rest avec une requete http en PUT
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${client.identifiant}`, client)
                          .pipe(
                                tap(
                                    //next() : émet un évènement (notification) pour les composants qui vont s'abonner à 
                                    //         l'observable pour les informer de la modif d'un employé
                                    () => { this.refreshNeeded.next() }
                                )
                          );
  }
}
