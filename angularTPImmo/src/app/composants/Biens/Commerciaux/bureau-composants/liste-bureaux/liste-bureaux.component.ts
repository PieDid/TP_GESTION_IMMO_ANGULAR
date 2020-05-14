import { Component, OnInit } from '@angular/core';
import { BureauService } from 'src/app/services/bureau.service'
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IBureau } from 'src/app/modele/IBureau';

@Component({
  selector: 'app-liste-bureaux',
  templateUrl: './liste-bureaux.component.html',
  styleUrls: ['./liste-bureaux.component.css'],
  providers: [NgbRatingConfig]
})
export class ListeBureauxComponent implements OnInit {

  private _bureaux = [];

  public get bureaux() {
    return this._bureaux;
  }
  public set bureaux(value) {
    this._bureaux = value;
  }

  constructor( private bureauService : BureauService, config: NgbRatingConfig, private router : Router) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.bureauService.refreshNeeded.subscribe(
      () => { this.getAllBureaux(); }
    );
    this.getAllBureaux();
  } 


  getAllBureaux(){
    this.bureauService.getAllBureau().subscribe(
      data => {this.bureaux = data} );
  }

  editBureau(id_bien : number){
    this.router.navigate(['bureau/',id_bien]);
  }

  deleteBureau(bureau : IBureau){

    this.bureauService.supprimerBureau(bureau).subscribe(
      () => {this.bureaux.filter(bu => bu != bureau);}
    )
  }

}
