import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { IAdressePersonne } from 'src/app/modele/IAdressePersonne';
import { AdressePersonneService } from 'src/app/services/adresse-personne.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-adresse-personne',
  templateUrl: './create-adresse-personne.component.html',
  styleUrls: ['./create-adresse-personne.component.css']
})
export class CreateAdressePersonneComponent implements OnInit {

  adressePersonne : IAdressePersonne = {

    idAdresse : null,
    rue : null,
    codePostal : null,
    ville : null,
    personne : null

  }

  constructor(private router : Router, private adressePersonneService : AdressePersonneService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (parameterMap) => {
         const id = +parameterMap.get("id");
           this.findAdressePersonneById(id);
      }
    );
  }

  saveOrUpdateAdressePersonne(){
    if(this.adressePersonne.idAdresse == null){

      this.adressePersonneService.ajouterAdressePersonne(this.adressePersonne).subscribe(
        (data) => { console.log(data); }
      );

    }else{
       this.adressePersonneService.modifierAdressePersonne(this.adressePersonne).subscribe(
        () => {  }
      );

    }

    this.router.navigate(['adressePersonneList']);
    console.log(this.adressePersonne);
  }

  
  findAdressePersonneById(idAdresse : number){
    if(idAdresse == 0){
      
      this.adressePersonne = {

        idAdresse : null,
        rue : null,
        codePostal : null,
        ville : null,
        personne : null
      
      };

    }else{
      
      this.adressePersonneService.findAdressePersonneById(idAdresse).subscribe(
        (aPersonneModif) => {this.adressePersonne = aPersonneModif}
      );
    }
  }
  listAdressePersonne() {
    this.router.navigate(['adressePersonneList']);
  }

}
