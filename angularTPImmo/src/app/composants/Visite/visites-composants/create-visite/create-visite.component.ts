import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { IVisite } from '../../../../modele/IVisite';
import { Router, ActivatedRoute } from '@angular/router';
import { VisiteService } from '../../../../services/visite.service';

@Component({
  selector: 'app-create-visite',
  templateUrl: './create-visite.component.html',
  styleUrls: ['./create-visite.component.css']
})
export class CreateVisiteComponent implements OnInit {

  visite : IVisite = {

    id_visite : null,
    date : null,
    heure : null,
    bien : null,
    agent : null,
    client : null,
    proprietaire : null
  }

  constructor(private router : Router, private visiteService : VisiteService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (parameterMap) => {
         const id = +parameterMap.get("id");
           this.findVisiteById(id);
      }
    );
  }

  saveOrUpdateVisite(){
    if(this.visite.id_visite == null){

      this.visiteService.ajouterVisite(this.visite).subscribe(
        (data) => { console.log(data); }
      );

    }else{
       this.visiteService.modifierVisite(this.visite).subscribe(
        () => {  }
      );

    }

    this.router.navigate(['visiteList']);
    console.log(this.visite);
  }

  findVisiteById(id_visite : number){
    if(id_visite == 0){
      
      this.visite = {

        id_visite : null,
        date : null,
        heure : null,
        bien : null,
        agent : null,
        client : null,
        proprietaire:null
      };

    }else{
      
      this.visiteService.findVisiteById(id_visite).subscribe(
        (visiteModif) => {this.visite = visiteModif}
      );
    }
  }

  listVisite() {
    this.router.navigate(['visiteList']);
  }

}
