import { Component, OnInit } from '@angular/core';
import { TerrainService } from 'src/app/services/terrain.service'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ITerrain } from 'src/app/modele/ITerrain';

@Component({
  selector: 'app-liste-terrains',
  templateUrl: './liste-terrains.component.html',
  styleUrls: ['./liste-terrains.component.css'],
  providers: [NgbRatingConfig]
})
export class ListeTerrainsComponent implements OnInit {

  private _terrains = [];

  public get terrains() {
    return this._terrains;
  }

  public set terrains(value) {
    this._terrains = value;
  }

  ratingMin = 1;
  ratingMax = 5;
  
  prixMin = 0;
  prixMax = 1E100;


  constructor(private terrainService: TerrainService, config: NgbRatingConfig, private router: Router) {
    /* pour le nb max d'étoile et lecture seule ou non */
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    //rafraichissement de la page
    this.terrainService.refreshNeeded.subscribe(
      () => { this.getAllTerrains(); }
    );
    this.getAllTerrains();
  } // end ngOnInit()


  getAllTerrains() {
    this.terrainService.getAllTerrain().subscribe(
      data => { this.terrains = data });
  }

  editTerrain(id_bien: number) {
    this.router.navigate(['terrain/', id_bien]);
  }

  deleteTerrain(terrain: ITerrain) {

    this.terrainService.supprimerTerrain(terrain).subscribe(
      () => { this.terrains.filter(terr => terr != terrain); }
    )

  }

} // end class
