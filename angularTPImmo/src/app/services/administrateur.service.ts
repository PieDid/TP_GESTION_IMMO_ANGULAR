import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAdministrateur } from '../modele/IAdministrateur';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/administrateur-rest/administrateur";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllAdministrateur(): Observable<IAdministrateur[]> {
    return this.httpClient.get<IAdministrateur[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAdministrateur()

  ajouterAdministrateur(administrateur: IAdministrateur): Observable<IAdministrateur> {
    return this.httpClient.post<IAdministrateur>(`${this.WS_REST_BASE_URL}Add`, administrateur).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterAdministrateur()

  supprimerAdministrateur(administrateur: IAdministrateur): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${administrateur.identifiant}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerAdministrateur()

  editAdministrateur(idAdministrateur: number) {
    this.router.navigate(['edit/', idAdministrateur]);
  } // end editAdministrateur()

  findAdministrateurById(idAdministrateur: number): Observable<IAdministrateur> {
    return this.httpClient.get<IAdministrateur>(`${this.WS_REST_BASE_URL}/${idAdministrateur}`);
  } // end findAdministrateurById()

  modifierAdministrateur(administrateur: IAdministrateur): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${administrateur.identifiant}`, administrateur).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierAdministrateur()

} // end class
