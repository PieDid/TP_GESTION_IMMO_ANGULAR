import { Component, OnInit } from '@angular/core';
import { TerrainService } from 'src/app/services/terrain.service'

@Component({
  selector: 'app-liste-terrains',
  templateUrl: './liste-terrains.component.html',
  styleUrls: ['./liste-terrains.component.css']
})
export class ListeTerrainsComponent implements OnInit {

  private _terrains = [];

  public get terrains() {
    return this._terrains;
  }

  public set terrains(value) {
    this._terrains = value;
  }

  constructor( private terrainService : TerrainService) { }

  ngOnInit(): void {
    this.terrainService.getAllTerrain().subscribe( data => {this.terrains = data} );
  } // end ngOnInit()

} // end class
