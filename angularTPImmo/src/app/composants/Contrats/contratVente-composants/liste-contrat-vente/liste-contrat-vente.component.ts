import { Component, OnInit } from '@angular/core';
import { ContratVenteService  } from 'src/app/services/contrat-vente.service';
import { Router } from '@angular/router';
import { IContratVente} from 'src/app/modele/IContratVente'
@Component({
  selector: 'app-liste-contrat-vente',
  templateUrl: './liste-contrat-vente.component.html',
  styleUrls: ['./liste-contrat-vente.component.css']
})
export class ListeContratVenteComponent implements OnInit {

  private _contratVentes = [];

  public get contratVentes() {
    return this._contratVentes;
  }
  public set contratVentes(value) {
    this._contratVentes = value;
  }

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor( private contratVenteService : ContratVenteService, private router : Router) { }

  ngOnInit(): void {
    //rafraichissement de la page
    this.contratVenteService.refreshNeeded.subscribe(
      () => { this.getAllContratVentes(); }
    );
    this.getAllContratVentes();
  }

  getAllContratVentes(){
    this.contratVenteService.getAllContratVente().subscribe(
      data => {this.contratVentes = data} );
  }

  editContratVente(id_bien : number){
    this.router.navigate(['contratVente/',id_bien]);
  }

  deleteContratVente(contratVente : IContratVente){

    this.contratVenteService.supprimerContratVente(contratVente).subscribe(
      () => {this.contratVentes.filter(m => m != contratVente);}
    )

  }

  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos;
  }

}
