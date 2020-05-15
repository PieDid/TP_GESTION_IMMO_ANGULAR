import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {MentionsLegalesComponent} from './layout/mentions-legales/mentions-legales.component'
import {DonneesPersonnellesComponent} from './layout/donnees-personnelles/donnees-personnelles.component'
import {NosAgencesComponent} from './layout/nos-agences/nos-agences.component'
import { ListeClientsComponent } from './composants/Personnes/client-composants/liste-clients/liste-clients.component';
import { CreateClientComponent } from './composants/Personnes/client-composants/create-client/create-client.component';
import { ListeAgentsComponent } from './composants/Personnes/agent-composants/liste-agents/liste-agents.component';
import { CreateAgentComponent } from './composants/Personnes/agent-composants/create-agent/create-agent.component';
import { ListeTerrainsComponent } from './composants/Biens/Terrains/terrain-composants/liste-terrains/liste-terrains.component';
import { CreateTerrainComponent } from './composants/Biens/Terrains/terrain-composants/create-terrain/create-terrain.component';
import { ListeMaisonsComponent } from './composants/Biens/Habitations/maison-composants/liste-maisons/liste-maisons.component';
import { CreateMaisonComponent } from './composants/Biens/Habitations/maison-composants/create-maison/create-maison.component';
import { ListeAppartementsComponent } from './composants/Biens/Habitations/appartement-composants/liste-appartements/liste-appartements.component';
import { CreateAppartementComponent} from './composants/Biens/Habitations/appartement-composants/create-appartement/create-appartement.component';
import { ListeStudiosComponent } from './composants/Biens/Habitations/studio-composants/liste-studios/liste-studios.component';
import { CreateStudioComponent} from './composants/Biens/Habitations/studio-composants/create-studio/create-studio.component';
import { ListeProprietairesComponent } from './composants/Personnes/proprietaire-composants/liste-proprietaires/liste-proprietaires.component';
import { CreateProprietaireComponent } from './composants/Personnes/proprietaire-composants/create-proprietaire/create-proprietaire.component';
import { ListeAdministrateursComponent } from './composants/Personnes/administrateur-composants/liste-administrateurs/liste-administrateurs.component';
import { CreateAdministrateurComponent } from './composants/Personnes/administrateur-composants/create-administrateur/create-administrateur.component';
import { HomeComponent } from './composants/home/home.component';
import { LoginComponent } from './composants/login/login.component';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { BoardAdminComponent } from './composants/board-admin/board-admin.component';
import { ListeBureauxComponent } from './composants/Biens/Commerciaux/bureau-composants/liste-bureaux/liste-bureaux.component';
import { CreateBureauComponent } from './composants/Biens/Commerciaux/bureau-composants/create-bureau/create-bureau.component';
import { ListeCommercesComponent } from './composants/Biens/Commerciaux/commerce-composants/liste-commerces/liste-commerces.component';
import { CreateCommerceComponent } from './composants/Biens/Commerciaux/commerce-composants/create-commerce/create-commerce.component';
import { ListeEntrepotsComponent } from './composants/Biens/Commerciaux/entrepot-composants/liste-entrepots/liste-entrepots.component';
import { CreateEntrepotComponent } from './composants/Biens/Commerciaux/entrepot-composants/create-entrepot/create-entrepot.component';
import { ListeVisitesComponent } from './composants/Visite/visites-composants/liste-visites/liste-visites.component';
import { CreateVisiteComponent } from './composants/Visite/visites-composants/create-visite/create-visite.component';
import { CreateAdresseBienComponent } from './composants/Adresses/adresseBien-composants/create-adresse-bien/create-adresse-bien.component';
import { ListeAdresseBienComponent } from './composants/Adresses/adresseBien-composants/liste-adresse-bien/liste-adresse-bien.component';
import { ListeContratLocationComponent } from 'src/app/composants/Contrats/contratLocation-composants/liste-contrat-location/liste-contrat-location.component'
import { CreateContratLocationComponent } from 'src/app/composants/Contrats/contratLocation-composants/create-contrat-location/create-contrat-location.component'
import { ListeContratVenteComponent } from 'src/app/composants/Contrats/contratVente-composants/liste-contrat-vente/liste-contrat-vente.component'
import { CreateContratVenteComponent } from 'src/app/composants/Contrats/contratVente-composants/create-contrat-vente/create-contrat-vente.component'
import { ListeAdressePersonneComponent } from './composants/Adresses/adressePersonne-composants/liste-adresse-personne/liste-adresse-personne.component';
import { CreateAdressePersonneComponent } from './composants/Adresses/adressePersonne-composants/create-adresse-personne/create-adresse-personne.component';
import { ListePersonnesComponent } from './composants/Personnes/personne-composants/liste-personnes/liste-personnes.component';
import { CreatePersonneComponent } from './composants/Personnes/personne-composants/create-personne/create-personne.component';

const routes: Routes = [
  {path:"", redirectTo:"accueil", pathMatch:'full'}, // route par défaut - redirection
  {path:"accueil", component: AccueilComponent}, // accueil
  {path:"mentionlegales", component:MentionsLegalesComponent},  // mentions légales
  {path:"nosAgences", component:NosAgencesComponent},  // mentions légales
  {path:"donneesPersonnelles", component:DonneesPersonnellesComponent},  // donnees personnelles

  /* routes personnes */
  {path:"clientList", component: ListeClientsComponent},
  {path:"clientEdit/:id", component: CreateClientComponent},
  {path:"agentList", component: ListeAgentsComponent},
  {path:"agentEdit/:id", component: CreateAgentComponent},
  {path:"proprietaireList", component: ListeProprietairesComponent},
  {path:"proprietaireEdit/:id", component: CreateProprietaireComponent},
  {path:"administrateurList", component: ListeAdministrateursComponent},
  {path:"administrateurEdit/:id", component: CreateAdministrateurComponent},
  {path:"personneList", component: ListePersonnesComponent},
  {path:"personneEdit/:id", component: CreatePersonneComponent},

  /* routes biens */
  {path:"terrainList", component: ListeTerrainsComponent },
  {path:"terrain/:id", component: CreateTerrainComponent },
  {path:"maisonList", component: ListeMaisonsComponent },
  {path:"maison/:id", component: CreateMaisonComponent },
  {path:"appartementList", component: ListeAppartementsComponent },
  {path:"appartement/:id", component: CreateAppartementComponent },
  {path:"studioList", component: ListeStudiosComponent },
  {path:"studio/:id", component: CreateStudioComponent },
  {path:"bureauList", component: ListeBureauxComponent },
  {path:"bureau/:id", component: CreateBureauComponent },
  {path:"commerceList", component: ListeCommercesComponent },
  {path:"commerce/:id", component: CreateCommerceComponent },
  {path:"entrepotList", component: ListeEntrepotsComponent },
  {path:"entrepot/:id", component: CreateEntrepotComponent },

  /* autres routes */

  {path:"adresseBienList", component: ListeAdresseBienComponent },
  {path:"adresseBien/:id", component: CreateAdresseBienComponent },
  {path:"adressePersonneList", component: ListeAdressePersonneComponent },
  {path:"adressePersonne/:id", component: CreateAdressePersonneComponent},  
  {path:"visiteList", component: ListeVisitesComponent },
  {path:"visite/:id", component: CreateVisiteComponent },
  {path:"contratLocationList", component: ListeContratLocationComponent },
  {path:"contratLocation/:id", component: CreateContratLocationComponent},
  {path:"contratVenteList", component: ListeContratVenteComponent },
  {path:"contratVente/:id", component: CreateContratVenteComponent},

  /* routes securité */
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardAdminComponent },
  
/* ,
  {path:"**", component: AccueilComponent} */

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
