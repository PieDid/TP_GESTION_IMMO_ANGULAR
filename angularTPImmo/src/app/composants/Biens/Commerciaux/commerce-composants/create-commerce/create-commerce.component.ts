import { Component, OnInit } from '@angular/core';
import { ICommerce } from 'src/app/modele/ICommerce'
import { Router, ActivatedRoute } from '@angular/router';
import { CommerceService } from 'src/app/services/commerce.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; // calendrier

@Component({
  selector: 'app-commerce',
  templateUrl: './create-commerce.component.html',
  styleUrls: ['./create-commerce.component.css']
})
export class CreateCommerceComponent implements OnInit {

  commerce: ICommerce = {
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
    private commerceService: CommerceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        // récup du param id de l'url (ref : route edit/:id de app-routing.module.ts )
        const id = +parameterMap.get("id");
        // appel de la méthode findEmployeById() avec la valeur du param pour la récup de l'employé à modifier
        this.findCommerceById(id);
      });
  }

  saveOrUpdateCommerce() {

    //-> test de l'employé à ajouter ou à modifier
    if (this.commerce.id_bien == null) {
      // ------------ nouvel employé ---------------- //
      //-> appel du service EmployeService pour l'ajout de l'employé
      this.commerceService.ajouterCommerce(this.commerce).subscribe(
        (data) => { console.log(data); }
      );
    } else {
      // ----- modification d'un employé ------------ //
      //-> invocation de la méthode du service modifierEmploye() pour la maj de l'employé
      this.commerceService.modifierCommerce(this.commerce).subscribe();

    } // end else

    //=> redirection vers la liste des employés via la route '/list'
    this.router.navigate(['commerceList']);
  } // end saveEmploye()


  /**
   * Permet de  :
   *  -> cas id = 0  : initialiser un objet vide pour l'ajout
   *  -> cas id != 0 : appel du service pour la récup de l'employé pour la modification
   * @param idEmploye Id de l'employe a recuperer
   */
  findCommerceById(id_bien: number) {
    if (id_bien == 0) {
      // ------- ajout ------- //
      this.commerce = { id_bien: null, statut: false, offre: null, prix: null, standard: null, adresseBien: null, dateSoumission: null, dateDisposition: null, revenu: null, listePhoto: null, listeVisite: null, contrat: null, proprietaire: null, superficie: null };
    } else {
      // ------- modif ------- //
      //-> findEmployeById retourne l'employé à modifier
      this.commerceService.getCommerceById(id_bien).subscribe((commerceModif) => { this.commerce = commerceModif });
    } // end else

  } // end findEmployeById()

}
