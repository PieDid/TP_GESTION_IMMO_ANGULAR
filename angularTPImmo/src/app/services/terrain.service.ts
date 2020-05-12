import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { ITerrain } from '../modele/ITerrain';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/terrain-rest/terrain";
  refreshNeeded = new Subject();

   constructor(private httpClient : HttpClient, private router : Router) { }

  getAllTerrain() : Observable<ITerrain[]>{
    return this.httpClient.get<ITerrain[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllTerrain()

  getTerrainById(idTerrain : number) : Observable<ITerrain>{
    return this.httpClient.get<ITerrain>(`${this.WS_REST_BASE_URL}/${idTerrain}` );
  } // end getTerrainById()

  supprimerTerrain(terrain : ITerrain) : Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${terrain.id_bien}`).pipe(tap( () => {this.refreshNeeded.next} ));
  } // end supprimmerTerrain()

  ajouterTerrain(terrain : ITerrain) : Observable<ITerrain>{
    return this.httpClient.post<ITerrain>(`${this.WS_REST_BASE_URL}Add`, terrain).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end ajouterTerrain()

  editTerrain(idTerrain : number){
    this.router.navigate(['edit/', idTerrain]);
  } // end  editTerrain()

  modifierTerrain(terrain : ITerrain) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${terrain.id_bien}`, terrain).pipe(tap( () => { this.refreshNeeded.next() } ));
  } // end modifierTerrains()

} // end class
