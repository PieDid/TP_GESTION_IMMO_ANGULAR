import { Component, OnInit } from '@angular/core';
import { ContratLocationService  } from 'src/app/services/contrat-location.service';
import { Router } from '@angular/router';
import { IContratLocation} from 'src/app/modele/IContratLocation'
@Component({
  selector: 'app-liste-contrat-location',
  templateUrl: './liste-contrat-location.component.html',
  styleUrls: ['./liste-contrat-location.component.css']
})
export class ListeContratLocationComponent implements OnInit {

  private _contratLocations = [];

  public get contratLocations() {
    return this._contratLocations;
  }
  public set contratLocations(value) {
    this._contratLocations = value;
  }

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor( private contratLocationService : ContratLocationService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.contratLocationService.refreshNeeded.subscribe(
      () => { this.getAllContratLocations(); }
    );
    this.getAllContratLocations();
  }

  getAllContratLocations(){
    this.contratLocationService.getAllContratLocation().subscribe(
      data => {this.contratLocations = data} );
  }

  editContratLocation(id_bien : number){
    this.router.navigate(['contratLocation/',id_bien]);
  }

  deleteContratLocation(contratLocation : IContratLocation){

    this.contratLocationService.supprimerContratLocation(contratLocation).subscribe(
      () => {this.contratLocations.filter(m => m != contratLocation);}
    )

  }

  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

}
