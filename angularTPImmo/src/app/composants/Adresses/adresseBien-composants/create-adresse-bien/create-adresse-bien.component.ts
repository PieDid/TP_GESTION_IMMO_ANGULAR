import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { IAdresseBien } from '../../../../modele/IAdresseBien';
import { Router, ActivatedRoute } from '@angular/router';
import { VisiteService } from '../../../../services/visite.service';
import { AdresseBienService } from 'src/app/services/adresse-bien.service';

@Component({
  selector: 'app-create-adresse-bien',
  templateUrl: './create-adresse-bien.component.html',
  styleUrls: ['./create-adresse-bien.component.css']
})
export class CreateAdresseBienComponent implements OnInit {

  adresseBien : IAdresseBien = {

    idAdresse : null,
    rue : null,
    codePostal : null,
    ville : null,
    bien : null

  }

  constructor(private router : Router, private abienService : AdresseBienService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (parameterMap) => {
         const id = +parameterMap.get("id");
           this.findAdresseBienById(id);
      }
    );
  }

  saveOrUpdateAdresseBien(){
    if(this.adresseBien.idAdresse == null){

      this.abienService.ajouterAdresseBien(this.adresseBien).subscribe(
        (data) => { console.log(data); }
      );

    }else{
       this.abienService.modifierAdresseBien(this.adresseBien).subscribe(
        () => {  }
      );

    }

    this.router.navigate(['adresseBienList']);
    console.log(this.adresseBien);
  }

  findAdresseBienById(idAdresse : number){
    if(idAdresse == 0){
      
      this.adresseBien = {

        idAdresse : null,
        rue : null,
        codePostal : null,
        ville : null,
        bien : null
      
      };

    }else{
      
      this.abienService.findAdresseBienById(idAdresse).subscribe(
        (abienModif) => {this.adresseBien = abienModif}
      );
    }
  }

listAdresseBien() {
    this.router.navigate(['adresseBienList']);
  }

}
