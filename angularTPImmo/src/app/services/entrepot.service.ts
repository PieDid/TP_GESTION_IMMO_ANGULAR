import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IEntrepot } from '../modele/IEntrepot';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntrepotService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/entrepot-rest/entrepot";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllEntrepot() : Observable<IEntrepot[]>{
    return this.httpClient.get<IEntrepot[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllEntrepot()

  getEntrepotById(idEntrepot : number) : Observable<IEntrepot>{
    return this.httpClient.get<IEntrepot>(`${this.WS_REST_BASE_URL}/${idEntrepot}` );
  } // end getEntrepotById()

  supprimerEntrepot(entrepot : IEntrepot) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${entrepot.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerEntrepot()

  ajouterEntrepot(entrepot : IEntrepot) : Observable<IEntrepot>{
    return this.httpClient.post<IEntrepot>(`${this.WS_REST_BASE_URL}Add`, entrepot).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterEntrepot()

  editEntrepot(idEntrepot : number){
    this.router.navigate(['edit/', idEntrepot]);
  } // end  editEntrepot()

  modifierEntrepot(entrepot : IEntrepot) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${entrepot.id_bien}`, entrepot).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierEntrepots()

} // end class
