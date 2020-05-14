import { Component, OnInit } from '@angular/core';
import { VisiteService } from '../../../../services/visite.service';
import { IVisite } from '../../../../modele/IVisite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-visites',
  templateUrl: './liste-visites.component.html',
  styleUrls: ['./liste-visites.component.css']
})
export class ListeVisitesComponent implements OnInit {

  visites = [];

  previewInfos : boolean = false;

  constructor(private visiteService : VisiteService, private router : Router) { }

  ngOnInit(): void {
    this.visiteService.refreshNeeded.subscribe(
      () => { this.getAllVisites(); }
    );
    this.getAllVisites();
  }

  getAllVisites(){

    this.visiteService.getAllVisite().subscribe(
      data => this.visites = data
    );
  }

  deleteVisite(visite : IVisite){

    this.visiteService.supprimerVisite(visite).subscribe(
      () => { this.visites.filter(vis => vis != visite); }
    );

  }

  editVisite(idVisite: number) {
    this.router.navigate(['visiteEdit/', idVisite]);
  } 

  toggleInfosPreview(){
    this.previewInfos = !this.previewInfos; 

  }}