import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdressePersonneService } from 'src/app/services/adresse-personne.service';
import { IAdressePersonne } from 'src/app/modele/IAdressePersonne';


@Component({
  selector: 'app-liste-adresse-personne',
  templateUrl: './liste-adresse-personne.component.html',
  styleUrls: ['./liste-adresse-personne.component.css']
})
export class ListeAdressePersonneComponent implements OnInit {

  adressePersonnes = [];
  
  previewInfos : boolean = false;

  constructor(private AdressePersonneService : AdressePersonneService,  private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.AdressePersonneService.refreshNeeded.subscribe(
      () => { this.getAllAdressePersonne(); }
    );
    this.getAllAdressePersonne();
  }

  getAllAdressePersonne(){
    this.AdressePersonneService.getAllAdressePersonne().subscribe(
      data => {this.adressePersonnes = data} );
  }

  editAdressePersonne(idAdressePersonne : number){
    this.router.navigate(['adressePersonne/',idAdressePersonne]);
  }

  deleteAdressePersonne(adressePersonne : IAdressePersonne){

    this.AdressePersonneService.supprimerAdressePersonne(adressePersonne).subscribe(
      () => {this.adressePersonnes.filter(m => m != adressePersonne);}
    )

  }

  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos; 

  }

}
