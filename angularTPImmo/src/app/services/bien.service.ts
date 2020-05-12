import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IBien } from '../modele/IBien';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/bien-rest/bien";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllBien() : Observable<IBien[]>{
    return this.httpClient.get<IBien[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllBien()

  getBienById(idBien : number) : Observable<IBien>{
    return this.httpClient.get<IBien>(`${this.WS_REST_BASE_URL}/${idBien}` );
  } // end getBienById()

  supprimerBien(bien : IBien) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${bien.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerBien()

  ajouterBien(bien : IBien) : Observable<IBien>{
    return this.httpClient.post<IBien>(`${this.WS_REST_BASE_URL}Add`, bien).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterBien()

  editBien(idBien : number){
    this.router.navigate(['edit/', idBien]);
  } // end  editBien()

  modifierBien(bien : IBien) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${bien.id_bien}`, bien).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierBiens()

} // end class
