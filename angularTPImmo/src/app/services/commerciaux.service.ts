import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { ICommerciaux } from '../modele/ICommerciaux';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommerciauxService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/commerciaux-rest/commerciaux";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllCommerciaux() : Observable<ICommerciaux[]>{
    return this.httpClient.get<ICommerciaux[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllCommerciaux()

  getCommerciauxById(idCommerciaux : number) : Observable<ICommerciaux>{
    return this.httpClient.get<ICommerciaux>(`${this.WS_REST_BASE_URL}/${idCommerciaux}` );
  } // end getCommerciauxById()

  supprimerCommerciaux(commerciaux : ICommerciaux) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${commerciaux.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerCommerciaux()

  ajouterCommerciaux(commerciaux : ICommerciaux) : Observable<ICommerciaux>{
    return this.httpClient.post<ICommerciaux>(`${this.WS_REST_BASE_URL}Add`, commerciaux).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterCommerciaux()

  editCommerciaux(idCommerciaux : number){
    this.router.navigate(['edit/', idCommerciaux]);
  } // end  editCommerciaux()

  modifierCommerciaux(commerciaux : ICommerciaux) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${commerciaux.id_bien}`, commerciaux).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierCommerciauxs()

  /*__________ méthodes spécifiques __________*/

  getCommerciauxByOffre(offre : string) : Observable<ICommerciaux[]>{
    return this.httpClient.get<ICommerciaux[]>(`${this.WS_REST_BASE_URL}List/offre/${offre}`);
  } // end getCommerciauxByOffre()

  getCommerciauxByPrix(prix : number) : Observable<ICommerciaux[]>{
    return this.httpClient.get<ICommerciaux[]>(`${this.WS_REST_BASE_URL}List/prix/${prix}`);
  } // end getCommerciauxByPrix()

  getCommerciauxBySuperficie(superficie : number) : Observable<ICommerciaux[]>{
    return this.httpClient.get<ICommerciaux[]>(`${this.WS_REST_BASE_URL}List/superficie/${superficie}`);
  } // end getCommerciauxBySuperficie()

} // end class
