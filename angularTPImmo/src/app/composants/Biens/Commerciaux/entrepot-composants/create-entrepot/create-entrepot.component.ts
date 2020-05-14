import { Component, OnInit } from '@angular/core';
import { IEntrepot } from 'src/app/modele/IEntrepot'
import { Router, ActivatedRoute } from '@angular/router';
import { EntrepotService } from 'src/app/services/entrepot.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; // calendrier

@Component({
  selector: 'app-entrepot',
  templateUrl: './create-entrepot.component.html',
  styleUrls: ['./create-entrepot.component.css']
})
export class CreateEntrepotComponent implements OnInit {

  entrepot: IEntrepot = {
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
    private entrepotService: EntrepotService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findEmployeById() avec la valeur du param pour la récup de l'employé à modifier
        this.findEntrepotById(id);
      });
  }

  saveOrUpdateEntrepot() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.entrepot.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.entrepotService.ajouterEntrepot(this.entrepot).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.entrepotService.modifierEntrepot(this.entrepot).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['entrepotList']);
  } // end saveEmploye()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   * @param idEmploye Id de l'employe a recuperer
   */
  findEntrepotById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.entrepot = { id_bien: null, statut: false, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.entrepotService.getEntrepotById(id_bien).subscribe((entrepotModif) => { this.entrepot = entrepotModif });
    } // end else

  } // end findEmployeById()

}
