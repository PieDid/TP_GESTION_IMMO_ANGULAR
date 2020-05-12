import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAdresseBien } from '../modele/IAdresseBien';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdresseBienService {

  
  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/adresseBien-rest/adresseBien";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllAdresseBien(): Observable<IAdresseBien[]> {
    return this.httpClient.get<IAdresseBien[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAdresseBien()

  ajouterAdresseBien(adresseBien: IAdresseBien): Observable<IAdresseBien> {
    return this.httpClient.post<IAdresseBien>(`${this.WS_REST_BASE_URL}Add`, adresseBien).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterAdresseBien()

  supprimerAdresseBien(adresseBien: IAdresseBien): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${adresseBien.idAdresse}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerAdresseBien()

  editAdresseBien(idAdresseBien: number) {
    this.router.navigate(['edit/', idAdresseBien]);
  } // end editAdresseBien()

  findAdresseBienById(idAdresseBien: number): Observable<IAdresseBien> {
    return this.httpClient.get<IAdresseBien>(`${this.WS_REST_BASE_URL}/${idAdresseBien}`);
  } // end findAdresseBienById()

  modifierAdresseBien(adresseBien: IAdresseBien): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${adresseBien.idAdresse}`, adresseBien).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierAdresseBien()

   /*__________ méthodes spécifiques __________*/

  findAdresseBiensByRue(rue : string) : Observable<IAdresseBien[]>{
    return this.httpClient.get<IAdresseBien[]>(`${this.WS_REST_BASE_URL}List/rue/${rue}`);
  } // end findAdresseBiensByRue()

  findAdresseBiensByCodePostal(codePostal : string) : Observable<IAdresseBien[]>{
    return this.httpClient.get<IAdresseBien[]>(`${this.WS_REST_BASE_URL}List/codePostal/${codePostal}`);
  } // end findAdresseBiensByCodePostal()

  findAdresseBiensByVille(ville : string) : Observable<IAdresseBien[]>{
    return this.httpClient.get<IAdresseBien[]>(`${this.WS_REST_BASE_URL}List/ville/${ville}`);
  } // end findAdresseBiensByVille()

} // end class
