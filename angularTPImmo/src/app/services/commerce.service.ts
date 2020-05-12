import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { ICommerce } from '../modele/ICommerce';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/commerce-rest/commerce";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllCommerce() : Observable<ICommerce[]>{
    return this.httpClient.get<ICommerce[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllCommerce()

  getCommerceById(idCommerce : number) : Observable<ICommerce>{
    return this.httpClient.get<ICommerce>(`${this.WS_REST_BASE_URL}/${idCommerce}` );
  } // end getCommerceById()

  supprimerCommerce(commerce : ICommerce) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${commerce.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerCommerce()

  ajouterCommerce(commerce : ICommerce) : Observable<ICommerce>{
    return this.httpClient.post<ICommerce>(`${this.WS_REST_BASE_URL}Add`, commerce).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterCommerce()

  editCommerce(idCommerce : number){
    this.router.navigate(['edit/', idCommerce]);
  } // end  editCommerce()

  modifierCommerce(commerce : ICommerce) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${commerce.id_bien}`, commerce).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierCommerces()

   /*__________ méthodes spécifiques __________*/

   getCommerceByOffre(offre : string) : Observable<ICommerce[]>{
    return this.httpClient.get<ICommerce[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getCommercesByOffre()

  getCommerceByPrix(prix : number) : Observable<ICommerce[]>{
    return this.httpClient.get<ICommerce[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getCommercesByPrix()

  getCommerceBySuperficie(superficie : number) : Observable<ICommerce[]>{
    return this.httpClient.get<ICommerce[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getCommercesBySuperficie()

} // end class
