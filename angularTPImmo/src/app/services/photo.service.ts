import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IPhoto } from '../modele/IPhoto';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private WS_REST_BASE_URL = "http://localhost:8080/tp_gestion_immobiliere/photo-rest/photo";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllPhoto(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllPhoto()

  ajouterPhoto(photo: IPhoto): Observable<IPhoto> {
    return this.httpClient.post<IPhoto>(`${this.WS_REST_BASE_URL}Add`, photo).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterPhoto()

  supprimerPhoto(photo: IPhoto): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${photo.id_photo}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerPhoto()

  editPhoto(idPhoto: number) {
    this.router.navigate(['edit/', idPhoto]);
  } // end editPhoto()

  findPhotoById(idPhoto: number): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`${this.WS_REST_BASE_URL}/${idPhoto}`);
  } // end findPhotoById()

  modifierPhoto(photo: IPhoto): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${photo.id_photo}`, photo).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierPhoto()

  getPhotoByBien(idBien: number): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(`${this.WS_REST_BASE_URL}List/bien/${idBien}`);
  } // end getPhotoByBien()

} // end class
