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
import { TerrainComponent } from './composants/Biens/Terrains/terrain-composants/terrain/terrain.component';
import { ListeProprietairesComponent } from './composants/Personnes/proprietaire-composants/liste-proprietaires/liste-proprietaires.component';
import { CreateProprietaireComponent } from './composants/Personnes/proprietaire-composants/create-proprietaire/create-proprietaire.component';
import { ListeAdministrateursComponent } from './composants/Personnes/administrateur-composants/liste-administrateurs/liste-administrateurs.component';
import { CreateAdministrateurComponent } from './composants/Personnes/administrateur-composants/create-administrateur/create-administrateur.component';

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
  {path:"terrainList", component: ListeTerrainsComponent },
  {path:"terrain/:id", component: TerrainComponent }
/* ,
  {path:"**", component: AccueilComponent} */

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
