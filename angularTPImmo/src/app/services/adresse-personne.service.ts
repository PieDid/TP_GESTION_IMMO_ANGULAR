import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAdressePersonne } from '../modele/IAdressePersonne';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdressePersonneService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/adressePersonne-rest/adressePersonne";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllAdressePersonne(): Observable<IAdressePersonne[]> {
    return this.httpClient.get<IAdressePersonne[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAdressePersonne()

  ajouterAdressePersonne(adressePersonne: IAdressePersonne): Observable<IAdressePersonne> {
    return this.httpClient.post<IAdressePersonne>(`${this.WS_REST_BASE_URL}Add`, adressePersonne).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterAdressePersonne()

  supprimerAdressePersonne(adressePersonne: IAdressePersonne): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${adressePersonne.idAdresse}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerAdressePersonne()

  editAdressePersonne(idAdressePersonne: number) {
    this.router.navigate(['edit/', idAdressePersonne]);
  } // end editAdressePersonne()

  findAdressePersonneById(idAdressePersonne: number): Observable<IAdressePersonne> {
    return this.httpClient.get<IAdressePersonne>(`${this.WS_REST_BASE_URL}/${idAdressePersonne}`);
  } // end findAdressePersonneById()

  modifierAdressePersonne(adressePersonne: IAdressePersonne): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${adressePersonne.idAdresse}`, adressePersonne).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierAdressePersonne()

   /*__________ méthodes spécifiques __________*/

  findAdressePersonnesByRue(rue : string) : Observable<IAdressePersonne[]>{
    return this.httpClient.get<IAdressePersonne[]>(`${this.WS_REST_BASE_URL}List/rue/${rue}`);
  } // end findAdressePersonnesByRue()

  findAdressePersonnesByCodePostal(codePostal : string) : Observable<IAdressePersonne[]>{
    return this.httpClient.get<IAdressePersonne[]>(`${this.WS_REST_BASE_URL}List/codePostal/${codePostal}`);
  } // end findAdressePersonnesByCodePostal()

  findAdressePersonnesByVille(ville : string) : Observable<IAdressePersonne[]>{
    return this.httpClient.get<IAdressePersonne[]>(`${this.WS_REST_BASE_URL}List/ville/${ville}`);
  } // end findAdressePersonnesByVille()

} // end class
