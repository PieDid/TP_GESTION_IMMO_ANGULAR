import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {MentionsLegalesComponent} from './layout/mentions-legales/mentions-legales.component'
import {DonneesPersonnellesComponent} from './layout/donnees-personnelles/donnees-personnelles.component'
import {NosAgencesComponent} from './layout/nos-agences/nos-agences.component'
import { ListeClientsComponent } from './composants/Personnes/client-composants/liste-clients/liste-clients.component';
import { CreateClientComponent } from './composants/Personnes/client-composants/create-client/create-client.component';
import { ListeTerrainsComponent } from './composants/Biens/Terrains/terrain-composants/liste-terrains/liste-terrains.component';
const routes: Routes = [
  {path:"", redirectTo:"accueil", pathMatch:'full'}, // route par défaut - redirection
  {path:"accueil", component: AccueilComponent}, // accueil
  {path:"mentionlegales", component:MentionsLegalesComponent},  // mentions légales
  {path:"nosAgences", component:NosAgencesComponent},  // mentions légales
  {path:"donneesPersonnelles", component:DonneesPersonnellesComponent},  // donnees personnelles

  /* routes personnes */
  {path:"clientList", component: ListeClientsComponent},
  {path:"edit/:id", component: CreateClientComponent},
  {path:"terrainList", component: ListeTerrainsComponent }
/* ,
  {path:"**", component: AccueilComponent} */

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
