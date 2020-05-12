import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IHabitation } from '../modele/IHabitation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HabitationService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/habitation-rest/habitation";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllHabitation() : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllHabitation()

  getHabitationById(idHabitation : number) : Observable<IHabitation>{
    return this.httpClient.get<IHabitation>(`${this.WS_REST_BASE_URL}/${idHabitation}` );
  } // end getHabitationById()

  supprimerHabitation(habitation : IHabitation) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${habitation.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerHabitation()

  ajouterHabitation(habitation : IHabitation) : Observable<IHabitation>{
    return this.httpClient.post<IHabitation>(`${this.WS_REST_BASE_URL}Add`, habitation).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterHabitation()

  editHabitation(idHabitation : number){
    this.router.navigate(['edit/', idHabitation]);
  } // end  editHabitation()

  modifierHabitation(habitation : IHabitation) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${habitation.id_bien}`, habitation).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierHabitations()

   /*__________ méthodes spécifiques __________*/

   getHabitationsByOffre(offre : string) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getHabitationsByOffre()

  getHabitationsByPrix(prix : number) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getHabitationsByPrix()

  getHabitationsByDateSoumission(date : string) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/dateSoumission/${date}`);
  } // end getHabitationsByDateSoumission()
  
  getHabitationsByDateDisposition(date : string) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/dateDisposition/${date}`);
  } // end getHabitationsByDateDisposition()

  getHabitationsBySuperficie(superficie : number) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getHabitationsBySuperficie()

  getHabitationsByNbPieces(nbPieces : number) : Observable<IHabitation[]>{
    return this.httpClient.get<IHabitation[]>(`${this.WS_REST_BASE_URL}List/pieces/${nbPieces}`);
  } // end getHabitationsByNbPieces()

} // end class
