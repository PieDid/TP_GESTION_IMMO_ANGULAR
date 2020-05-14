import { Component, OnInit } from '@angular/core';
import {IMaison} from 'src/app/modele/IMaison'
import { Router, ActivatedRoute } from '@angular/router';
import {MaisonService} from 'src/app/services/maison.service'

@Component({
  selector: 'app-create-maison',
  templateUrl: './create-maison.component.html',
  styleUrls: ['./create-maison.component.css']
})
export class CreateMaisonComponent implements OnInit {

  maison: IMaison = {
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
    private maisonService: MaisonService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findMaisonById() avec la valeur du param pour la récup de la maison à modifier
        this.findMaisonById(id);

      });

  }

  saveOrUpdateMaison() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.maison.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.maisonService.ajouterMaison(this.maison).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.maisonService.modifierMaison(this.maison).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['maisonList']);
  } // end saveMaison()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   */
  findMaisonById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.maison = { id_bien: null, statut: null, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, nbPieces : null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.maisonService.getMaisonById(id_bien).subscribe((maisonModif) => { this.maison = maisonModif });
      //this.photoService.getPhotoByBien(id_bien).subscribe( (data) => {this.maison.listePhoto = data});
    } // end else

  } // end findEmployeById()

}
