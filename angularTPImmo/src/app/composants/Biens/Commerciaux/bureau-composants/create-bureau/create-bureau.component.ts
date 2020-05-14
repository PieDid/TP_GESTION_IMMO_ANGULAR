import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BureauService } from 'src/app/services/bureau.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; // calendrier
import { IBureau } from 'src/app/modele/IBureau';

@Component({
  selector: 'app-bureau',
  templateUrl: './create-bureau.component.html',
  styleUrls: ['./create-bureau.component.css']
})
export class CreateBureauComponent implements OnInit {

  bureau: IBureau = {

    id_bien : null,
    statut : false,
    offre : null,
    prix : null,
    standard : null,
    adresseBien : null,
    dateSoumission : null,
    dateDisposition : null,
    revenu : null,

    listePhoto : null,
    listeVisite : null,
    contrat : null,
    proprietaire : null, 
    
    superficie : null

  }

  model: NgbDateStruct;

  constructor(private router: Router,
    private bureauService: BureauService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        const id = +parameterMap.get("id");
        this.findBureauById(id);
      });
  }

  saveOrUpdateBureau() {

    if (this.bureau.id_bien == null) {

      this.bureauService.ajouterBureau(this.bureau).subscribe(
        (data) => { console.log(data); }
      );
    } else {

      this.bureauService.modifierBureau(this.bureau).subscribe();

    } 
    this.router.navigate(['bureauList']);
  } 

  findBureauById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.bureau = { id_bien: null, statut: false, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, superficie: null };
    } else {
      
      this.bureauService.getBureauById(id_bien).subscribe((bureauModif) => { this.bureau = bureauModif });
    } 

  } 

}
