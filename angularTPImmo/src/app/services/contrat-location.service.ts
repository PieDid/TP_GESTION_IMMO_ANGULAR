import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IContratLocation } from '../modele/IContratLocation';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContratLocationService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/contratLocation-rest/contratLocation";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllContratLocation(): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllContratLocation()

  ajouterContratLocation(contratLocation: IContratLocation): Observable<IContratLocation> {
    return this.httpClient.post<IContratLocation>(`${this.WS_REST_BASE_URL}Add`, contratLocation).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterContratLocation()

  supprimerContratLocation(contratLocation: IContratLocation): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${contratLocation.idContrat}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerContratLocation()

  editContratLocation(idContratLocation: number) {
    this.router.navigate(['edit/', idContratLocation]);
  } // end editContratLocation()

  findContratLocationById(idContratLocation: number): Observable<IContratLocation> {
    return this.httpClient.get<IContratLocation>(`${this.WS_REST_BASE_URL}/${idContratLocation}`);
  } // end findContratLocationById()

  modifierContratLocation(contratLocation: IContratLocation): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${contratLocation.idContrat}`, contratLocation).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierContratLocation()

  getContratLocationByDate(date: string): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/date/${date}`);
  } // end getContratLocationByDate()

  getContratLocationByAgent(idAgent: number): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/agent/${idAgent}`);
  } // end getContratLocationByAgent()

  getContratLocationByProprietaire(idProprietaire: number): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/proprietaire/${idProprietaire}`);
  } // end getContratLocationByProprietaire()

  getContratLocationByCaution(caution: number): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/caution/${caution}`);
  } // end getContratLocationByCaution()

  getContratLocationByLoyer(loyer: number): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/loyer/${loyer}`);
  } // end getContratLocationByLoyer()

  getContratLocationByCharge(charge: number): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/charge/${charge}`);
  } // end getContratLocationByCharge()

  getContratLocationByTypeBail(typeBail: String): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/typeBail/${typeBail}`);
  } // end getContratLocationByTypeBail()

  getContratLocationByGarniture(garniture: String): Observable<IContratLocation[]> {
    return this.httpClient.get<IContratLocation[]>(`${this.WS_REST_BASE_URL}List/garniture/${garniture}`);
  } // end getContratLocationByGarniture()

} // end class
