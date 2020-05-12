import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IMaison } from '../modele/IMaison';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class MaisonService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/maison-rest/maison";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllMaison() : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllMaison()

  getMaisonById(idMaison : number) : Observable<IMaison>{
    return this.httpClient.get<IMaison>(`${this.WS_REST_BASE_URL}/${idMaison}` );
  } // end getMaisonById()

  supprimerMaison(maison : IMaison) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${maison.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimerMaison()

  ajouterMaison(maison : IMaison) : Observable<IMaison>{
    return this.httpClient.post<IMaison>(`${this.WS_REST_BASE_URL}Add`, maison).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterMaison()

  editMaison(idMaison : number){
    this.router.navigate(['edit/', idMaison]);
  } // end  editMaison()

  modifierMaison(maison : IMaison) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${maison.id_bien}`, maison).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierMaisons()

  /*__________ méthodes spécifiques __________*/

  getMaisonsByOffre(offre : string) : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getMaisonsByOffre()

  getMaisonsByPrix(prix : number) : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getMaisonsByPrix()

  getMaisonsByDateSoumission(date : string) : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List/dateSoumission/${date}`);
  } // end getMaisonsByDateSoumission()
  
  getMaisonsByDateDisposition(date : string) : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List/dateDisposition/${date}`);
  } // end getMaisonsByDateDisposition()

  getMaisonsBySuperficie(superficie : number) : Observable<IMaison[]>{
    return this.httpClient.get<IMaison[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getMaisonsBySuperficie()

} // end class
