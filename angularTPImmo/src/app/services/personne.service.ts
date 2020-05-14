import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IPersonne } from '../modele/IPersonne';
import { Router } from '@angular/router';

export class Personne{
  constructor(
    public identifiant:number,
    public nom:string,
    public motDePasse:string,
    public statut:string,
    public photo:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})


export class PersonneService {

  private _refreshNeeded = new Subject<void>();
  public get refreshNeeded() {
    return this._refreshNeeded;
  }

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/personne-rest/personne";


  //refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getPersonne()
  {
    return this.httpClient.get<Personne[]>(`${this.WS_REST_BASE_URL}List`);
  }

  getAllPersonne(): Observable<IPersonne[]> {
    return this.httpClient.get<IPersonne[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllPersonne()

  ajouterPersonne(personne: IPersonne): Observable<IPersonne> {
    return this.httpClient.post<IPersonne>(`${this.WS_REST_BASE_URL}Add`, personne).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterPersonne()

  supprimerPersonne(personne: IPersonne): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${personne.identifiant}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerPersonne()

  editPersonne(idPersonne: number) {
    this.router.navigate(['edit/', idPersonne]);
  } // end editPersonne()

  findPersonneById(idPersonne: number): Observable<IPersonne> {
    return this.httpClient.get<IPersonne>(`${this.WS_REST_BASE_URL}/${idPersonne}`);
  } // end findPersonneById()

  modifierPersonne(personne: IPersonne): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${personne.identifiant}`, personne).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierPersonne()

} // end class
