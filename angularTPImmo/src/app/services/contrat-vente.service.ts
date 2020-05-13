import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IContratVente } from '../modele/IContratVente';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContratVenteService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/contratVente-rest/contratVente";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllContratVente(): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllContratVente()

  ajouterContratVente(contratVente: IContratVente): Observable<IContratVente> {
    return this.httpClient.post<IContratVente>(`${this.WS_REST_BASE_URL}Add`, contratVente).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterContratVente()

  supprimerContratVente(contratVente: IContratVente): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${contratVente.idContrat}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerContratVente()

  editContratVente(idContratVente: number) {
    this.router.navigate(['edit/', idContratVente]);
  } // end editContratVente()

  findContratVenteById(idContratVente: number): Observable<IContratVente> {
    return this.httpClient.get<IContratVente>(`${this.WS_REST_BASE_URL}/${idContratVente}`);
  } // end findContratVenteById()

  modifierContratVente(contratVente: IContratVente): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${contratVente.idContrat}`, contratVente).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierContratVente()

  getContratVenteByDate(date: string): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List/date/${date}`);
  } // end getContratVenteByDate()

  getContratVenteByAgent(idAgent: number): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List/agent/${idAgent}`);
  } // end getContratVenteByAgent()

  getContratVenteByProprietaire(idProprietaire: number): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List/proprietaire/${idProprietaire}`);
  } // end getContratVenteByProprietaire()

  getContratVenteByPrix(prix: number): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getContratVenteByPrix()

  getContratVenteByEtat(etat: string): Observable<IContratVente[]> {
    return this.httpClient.get<IContratVente[]>(`${this.WS_REST_BASE_URL}List/etat/${etat}`);
  } // end getContratVenteByEtat()

} // end class
