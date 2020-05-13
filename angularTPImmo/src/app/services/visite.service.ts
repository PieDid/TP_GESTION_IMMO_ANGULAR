import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IVisite } from '../modele/IVisite';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/visite-rest/visite";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllVisite(): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllVisite()

  ajouterVisite(visite: IVisite): Observable<IVisite> {
    return this.httpClient.post<IVisite>(`${this.WS_REST_BASE_URL}Add`, visite).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterVisite()

  supprimerVisite(visite: IVisite): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${visite.id_visite}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerVisite()

  editVisite(idVisite: number) {
    this.router.navigate(['edit/', idVisite]);
  } // end editVisite()

  findVisiteById(idVisite: number): Observable<IVisite> {
    return this.httpClient.get<IVisite>(`${this.WS_REST_BASE_URL}/${idVisite}`);
  } // end findVisiteById()

  modifierVisite(visite: IVisite): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${visite.id_visite}`, visite).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierVisite()

  getVisiteByDate(date: string): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List/date/${date}`);
  } // end getVisiteByDate()

  getVisiteByBien(idBien: number): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List/bien/${idBien}`);
  } // end getVisiteByBien()

  getVisiteByAgent(idAgent: number): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List/agent/${idAgent}`);
  } // end getVisiteByAgent()

  getVisiteByClient(idClient: number): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List/client/${idClient}`);
  } // end getVisiteByClient()

  getVisiteByProprietaire(idProprietaire: number): Observable<IVisite[]> {
    return this.httpClient.get<IVisite[]>(`${this.WS_REST_BASE_URL}List/proprietaire/${idProprietaire}`);
  } // end getVisiteByProprietaire()

} // end class
