import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import de HttpClientModule :
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MentionsLegalesComponent } from './layout/mentions-legales/mentions-legales.component';
import { NosAgencesComponent } from './layout/nos-agences/nos-agences.component';
import { ListeClientsComponent } from './composants/Personnes/client-composants/liste-clients/liste-clients.component';
import { ClientComponent } from './composants/Personnes/client-composants/client/client.component';
import { ListeAdressePersonneComponent } from './composants/Adresses/adressePersonne-composants/liste-adresse-personne/liste-adresse-personne.component';
import { ListeAdresseBienComponent } from './composants/Adresses/adresseBien-composants/liste-adresse-bien/liste-adresse-bien.component';
import { ListeAppartementsComponent } from './composants/Biens/Habitations/appartement-composants/liste-appartements/liste-appartements.component';
import { ListeMaisonsComponent } from './composants/Biens/Habitations/maison-composants/liste-maisons/liste-maisons.component';
import { ListeStudiosComponent } from './composants/Biens/Habitations/studio-composants/liste-studios/liste-studios.component';
import { ListeCommercesComponent } from './composants/Biens/Commerciaux/commerce-composants/liste-commerces/liste-commerces.component';
import { ListeBureauxComponent } from './composants/Biens/Commerciaux/bureau-composants/liste-bureaux/liste-bureaux.component';
import { ListeEntrepotsComponent } from './composants/Biens/Commerciaux/entrepot-composants/liste-entrepots/liste-entrepots.component';
import { ListeTerrainsComponent } from './composants/Biens/Terrains/terrain-composants/liste-terrains/liste-terrains.component';
import { ListeContratLocationComponent } from './composants/Contrats/contratLocation-composants/liste-contrat-location/liste-contrat-location.component';
import { ListeContratVenteComponent } from './composants/Contrats/contratVente-composants/liste-contrat-vente/liste-contrat-vente.component';
import { ListeAgentsComponent } from './composants/Personnes/agent-composants/liste-agents/liste-agents.component';
import { AgentComponent } from './composants/Personnes/agent-composants/agent/agent.component';
import {DonneesPersonnellesComponent} from './layout/donnees-personnelles/donnees-personnelles.component';
import { CreateClientComponent } from './composants/Personnes/client-composants/create-client/create-client.component';
import { CreateAgentComponent } from './composants/Personnes/agent-composants/create-agent/create-agent.component';
import { TerrainComponent } from './composants/Biens/Terrains/terrain-composants/terrain/terrain.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    MentionsLegalesComponent,
    NosAgencesComponent,
    ListeClientsComponent,
    ClientComponent,
    ListeAdressePersonneComponent,
    ListeAdresseBienComponent,
    ListeAppartementsComponent,
    ListeMaisonsComponent,
    ListeStudiosComponent,
    ListeCommercesComponent,
    ListeBureauxComponent,
    ListeEntrepotsComponent,
    ListeTerrainsComponent,
    ListeContratLocationComponent,
    ListeContratVenteComponent,
    ListeAgentsComponent,
    AgentComponent,
    DonneesPersonnellesComponent,
    CreateClientComponent,
    CreateAgentComponent,
    TerrainComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
