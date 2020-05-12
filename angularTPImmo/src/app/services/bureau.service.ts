import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IBureau } from '../modele/IBureau';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BureauService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/bureau-rest/bureau";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllBureau() : Observable<IBureau[]>{
    return this.httpClient.get<IBureau[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllBureau()

  getBureauById(idBureau : number) : Observable<IBureau>{
    return this.httpClient.get<IBureau>(`${this.WS_REST_BASE_URL}/${idBureau}` );
  } // end getBureauById()

  supprimerBureau(bureau : IBureau) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${bureau.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerBureau()

  ajouterBureau(bureau : IBureau) : Observable<IBureau>{
    return this.httpClient.post<IBureau>(`${this.WS_REST_BASE_URL}Add`, bureau).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterBureau()

  editBureau(idBureau : number){
    this.router.navigate(['edit/', idBureau]);
  } // end  editBureau()

  modifierBureau(bureau : IBureau) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${bureau.id_bien}`, bureau).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierBureaus()

} // end class
