import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAgent } from '../modele/IAgent';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/agent-rest/agent";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllAgent(): Observable<IAgent[]> {
    return this.httpClient.get<IAgent[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAgent()

  ajouterAgent(agent: IAgent): Observable<IAgent> {
    return this.httpClient.post<IAgent>(`${this.WS_REST_BASE_URL}Add`, agent).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterAgent()

  supprimerAgent(agent: IAgent): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${agent.identifiant}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerAgent()

  editAgent(idAgent: number) {
    this.router.navigate(['edit/', idAgent]);
  } // end editAgent()

  findAgentById(idAgent: number): Observable<IAgent> {
    return this.httpClient.get<IAgent>(`${this.WS_REST_BASE_URL}/${idAgent}`);
  } // end findAgentById()

  modifierAgent(agent: IAgent): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${agent.identifiant}`, agent).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierAgent()

   /*__________ méthodes spécifiques __________*/

 /*   findAgentByNom(nom : string) : Observable<IAgent[]>{
     return this.httpClient.get<IAgent[]>(`${this.WS_REST_BASE_URL}/nom/${nom}`)
   } // end findAgentByNom()

   findAgentByStatut(statut : boolean) : Observable<IAgent[]>{
    return this.httpClient.get<IAgent[]>(`${this.WS_REST_BASE_URL}/statut/${statut}`)
  } // end findAgentByStatut() */

} // end class
