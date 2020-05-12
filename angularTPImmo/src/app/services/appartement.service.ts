import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAppartement } from '../modele/IAppartement';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/appartement-rest/appartement";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllAppartement() : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAppartement()

  getAppartementById(idAppartement : number) : Observable<IAppartement>{
    return this.httpClient.get<IAppartement>(`${this.WS_REST_BASE_URL}/${idAppartement}` );
  } // end getAppartementById()

  supprimerAppartement(appartement : IAppartement) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${appartement.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerAppartement()

  ajouterAppartement(appartement : IAppartement) : Observable<IAppartement>{
    return this.httpClient.post<IAppartement>(`${this.WS_REST_BASE_URL}Add`, appartement).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterAppartement()

  editAppartement(idAppartement : number){
    this.router.navigate(['edit/', idAppartement]);
  } // end  editAppartement()

  modifierAppartement(appartement : IAppartement) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${appartement.id_bien}`, appartement).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierAppartement()

   /*__________ méthodes spécifiques __________*/

   getAppartementsByOffre(offre : string) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getAppartementsByOffre()

  getAppartementsByPrix(prix : number) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getAppartementsByPrix()

  getAppartementsByDateSoumission(date : string) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/dateSoumission/${date}`);
  } // end getAppartementsByDateSoumission()
  
  getAppartementsByDateDisposition(date : string) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/dateDisposition/${date}`);
  } // end getAppartementsByDateDisposition()

  getAppartementsBySuperficie(superficie : number) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getAppartementsBySuperficie()

  getAppartementsByNbPieces(nbPieces : number) : Observable<IAppartement[]>{
    return this.httpClient.get<IAppartement[]>(`${this.WS_REST_BASE_URL}List/pieces/${nbPieces}`);
  } // end getAppartementsByNbPieces()

} // end class
