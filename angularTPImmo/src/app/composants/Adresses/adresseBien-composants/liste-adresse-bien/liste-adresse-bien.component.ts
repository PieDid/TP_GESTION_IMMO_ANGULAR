import { Component, OnInit } from '@angular/core';
import { AdresseBienService } from '../../../../services/adresse-bien.service';
import { IAdresseBien } from '../../../../modele/IAdresseBien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-adresse-bien',
  templateUrl: './liste-adresse-bien.component.html',
  styleUrls: ['./liste-adresse-bien.component.css']
})
export class ListeAdresseBienComponent implements OnInit {

  adresseBien = [];

  previewInfos : boolean = false;

  constructor(private abienService : AdresseBienService, private router : Router) { }

  ngOnInit(): void {
    this.abienService.refreshNeeded.subscribe(
      () => { this.getAllAdresseBien(); }
    );
    this.getAllAdresseBien();
  }

  getAllAdresseBien(){

    this.abienService.getAllAdresseBien().subscribe(
      data => this.adresseBien = data
    );
  }

  deleteAdresseBien(adresseBien : IAdresseBien){

    this.abienService.supprimerAdresseBien(adresseBien).subscribe(
      () => { this.adresseBien.filter(ab => ab != adresseBien); }
    );

  }

  editAdresseBien(idAdresseBien: number) {
    this.router.navigate(['adresseBienEdit/', idAdresseBien]);
  } 

  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos; 

  }}
