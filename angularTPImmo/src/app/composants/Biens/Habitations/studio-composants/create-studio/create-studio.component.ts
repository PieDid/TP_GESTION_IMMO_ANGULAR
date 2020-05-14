import { Component, OnInit } from '@angular/core';
import {IStudio} from 'src/app/modele/IStudio'
import { Router, ActivatedRoute } from '@angular/router';
import {StudioService} from 'src/app/services/studio.service'

@Component({
  selector: 'app-create-studio',
  templateUrl: './create-studio.component.html',
  styleUrls: ['./create-studio.component.css']
})
export class CreateStudioComponent implements OnInit {

  studio: IStudio = {
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
    private studioService: StudioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findStudioById() avec la valeur du param pour la récup de la studio à modifier
        this.findStudioById(id);

      });

  }

  saveOrUpdateStudio() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.studio.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.studioService.ajouterStudio(this.studio).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.studioService.modifierStudio(this.studio).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['studioList']);
  } // end saveStudio()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   */
  findStudioById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.studio = { id_bien: null, statut: null, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, nbPieces : null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.studioService.getStudioById(id_bien).subscribe((studioModif) => { this.studio = studioModif });
      //this.photoService.getPhotoByBien(id_bien).subscribe( (data) => {this.studio.listePhoto = data});
    } // end else

  } // end findEmployeById()

}
