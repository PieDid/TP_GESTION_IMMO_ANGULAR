import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IContrat } from '../modele/IContrat';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/contrat-rest/contrat";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllContrat(): Observable<IContrat[]> {
    return this.httpClient.get<IContrat[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllContrat()

  ajouterContrat(contrat: IContrat): Observable<IContrat> {
    return this.httpClient.post<IContrat>(`${this.WS_REST_BASE_URL}Add`, contrat).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterContrat()

  supprimerContrat(contrat: IContrat): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${contrat.idContrat}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerContrat()

  editContrat(idContrat: number) {
    this.router.navigate(['edit/', idContrat]);
  } // end editContrat()

  findContratById(idContrat: number): Observable<IContrat> {
    return this.httpClient.get<IContrat>(`${this.WS_REST_BASE_URL}/${idContrat}`);
  } // end findContratById()

  modifierContrat(contrat: IContrat): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${contrat.idContrat}`, contrat).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierContrat()

  getContratByDate(date: string): Observable<IContrat[]> {
    return this.httpClient.get<IContrat[]>(`${this.WS_REST_BASE_URL}List/date/${date}`);
  } // end getContratByDate()

  getContratByAgent(idAgent: number): Observable<IContrat[]> {
    return this.httpClient.get<IContrat[]>(`${this.WS_REST_BASE_URL}List/agent/${idAgent}`);
  } // end getContratByAgent()

  getContratByProprietaire(idProprietaire: number): Observable<IContrat[]> {
    return this.httpClient.get<IContrat[]>(`${this.WS_REST_BASE_URL}List/proprietaire/${idProprietaire}`);
  } // end getContratByProprietaire()

} // end class
