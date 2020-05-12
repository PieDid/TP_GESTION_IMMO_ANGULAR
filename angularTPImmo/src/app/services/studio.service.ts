import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IStudio } from '../modele/IStudio';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/studio-rest/studio";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllStudio() : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllStudio()

  getStudioById(idStudio : number) : Observable<IStudio>{
    return this.httpClient.get<IStudio>(`${this.WS_REST_BASE_URL}/${idStudio}` );
  } // end getStudioById()

  supprimerStudio(studio : IStudio) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${studio.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerStudio()

  ajouterStudio(studio : IStudio) : Observable<IStudio>{
    return this.httpClient.post<IStudio>(`${this.WS_REST_BASE_URL}Add`, studio).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterStudio()

  editStudio(idStudio : number){
    this.router.navigate(['edit/', idStudio]);
  } // end  editStudio()

  modifierStudio(studio : IStudio) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${studio.id_bien}`, studio).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierStudio()

   /*__________ méthodes spécifiques __________*/

   getStudiosByOffre(offre : string) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getStudiosByOffre()

  getStudiosByPrix(prix : number) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getStudiosByPrix()

  getStudiosByDateSoumission(date : string) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/dateSoumission/${date}`);
  } // end getStudiosByDateSoumission()
  
  getStudiosByDateDisposition(date : string) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/dateDisposition/${date}`);
  } // end getStudiosByDateDisposition()

  getStudiosBySuperficie(superficie : number) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getStudiosBySuperficie()

  getStudiosByNbPieces(nbPieces : number) : Observable<IStudio[]>{
    return this.httpClient.get<IStudio[]>(`${this.WS_REST_BASE_URL}List/pieces/${nbPieces}`);
  } // end getStudiosByNbPieces()

} // end class
