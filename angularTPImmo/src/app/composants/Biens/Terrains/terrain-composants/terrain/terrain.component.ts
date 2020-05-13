import { Component, OnInit } from '@angular/core';
import { ITerrain } from 'src/app/modele/ITerrain'
import { Router, ActivatedRoute } from '@angular/router';
import { TerrainService } from 'src/app/services/terrain.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; // calendrier

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  terrain: ITerrain = {
    id_bien: null,
    statut: false,
    offre: null,
    prix: null,
    standard: null,
    adresseBien: null,
    dateSoumission: null,
    dateDisposition: null,
    revenu: null,
    listePhoto: null,
    listeVisite: null,
    contrat: null,
    proprietaire: null,
    superficie: null
  }

  model: NgbDateStruct; // pour le calendrier



  constructor(private router: Router,
    private terrainService: TerrainService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findEmployeById() avec la valeur du param pour la récup de l'employé à modifier
        this.findTerrainById(id);
      });
  }

  saveOrUpdateTerrain() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.terrain.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.terrainService.ajouterTerrain(this.terrain).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.terrainService.modifierTerrain(this.terrain).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['terrainList']);
  } // end saveEmploye()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   * @param idEmploye Id de l'employe a recuperer
   */
  findTerrainById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.terrain = { id_bien: null, statut: false, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.terrainService.getTerrainById(id_bien).subscribe((terrainModif) => { this.terrain = terrainModif });
    } // end else

  } // end findEmployeById()

}
