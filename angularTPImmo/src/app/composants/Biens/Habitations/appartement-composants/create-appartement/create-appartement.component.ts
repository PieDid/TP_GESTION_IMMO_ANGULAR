import { Component, OnInit } from '@angular/core';
import {IAppartement} from 'src/app/modele/IAppartement';
import { Router, ActivatedRoute } from '@angular/router';
import {AppartementService} from 'src/app/services/appartement.service';

@Component({
  selector: 'app-create-appartement',
  templateUrl: './create-appartement.component.html',
  styleUrls: ['./create-appartement.component.css']
})
export class CreateAppartementComponent implements OnInit {


  appartement: IAppartement = {
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
    nbPieces : null,
    superficie: null
  }

  constructor(private router: Router,
    private appartementService: AppartementService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findAppartementById() avec la valeur du param pour la récup de la appartement à modifier
        this.findAppartementById(id);

      });

  }

  saveOrUpdateAppartement() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.appartement.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.appartementService.ajouterAppartement(this.appartement).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.appartementService.modifierAppartement(this.appartement).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['appartementList']);
  } // end saveAppartement()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   */
  findAppartementById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.appartement = { id_bien: null, statut: null, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, nbPieces : null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.appartementService.getAppartementById(id_bien).subscribe((appartementModif) => { this.appartement = appartementModif });
      //this.photoService.getPhotoByBien(id_bien).subscribe( (data) => {this.appartement.listePhoto = data});
    } // end else

  } // end findEmployeById()

}

