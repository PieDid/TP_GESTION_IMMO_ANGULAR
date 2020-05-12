import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IProprietaire } from '../modele/IProprietaire';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/proprietaire-rest/proprietaire";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllProprietaire(): Observable<IProprietaire[]> {
    return this.httpClient.get<IProprietaire[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllProprietaire()

  ajouterProprietaire(proprietaire: IProprietaire): Observable<IProprietaire> {
    return this.httpClient.post<IProprietaire>(`${this.WS_REST_BASE_URL}Add`, proprietaire).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterProprietaire()

  supprimerProprietaire(proprietaire: IProprietaire): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${proprietaire.identifiant}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerProprietaire()

  editProprietaire(idProprietaire: number) {
    this.router.navigate(['edit/', idProprietaire]);
  } // end editProprietaire()

  findProprietaireById(idProprietaire: number): Observable<IProprietaire> {
    return this.httpClient.get<IProprietaire>(`${this.WS_REST_BASE_URL}/${idProprietaire}`);
  } // end findProprietaireById()

  modifierProprietaire(proprietaire: IProprietaire): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${proprietaire.identifiant}`, proprietaire).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierProprietaire()

} // end class
