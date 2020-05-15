import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import de HttpClientModule :
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CreateTerrainComponent } from './composants/Biens/Terrains/terrain-composants/create-terrain/create-terrain.component';
import { ListeProprietairesComponent } from './composants/Personnes/proprietaire-composants/liste-proprietaires/liste-proprietaires.component';
import { CreateProprietaireComponent } from './composants/Personnes/proprietaire-composants/create-proprietaire/create-proprietaire.component';
import { ListeAdministrateursComponent } from './composants/Personnes/administrateur-composants/liste-administrateurs/liste-administrateurs.component';
import { CreateAdministrateurComponent } from './composants/Personnes/administrateur-composants/create-administrateur/create-administrateur.component';
import { CreateMaisonComponent } from './composants/Biens/Habitations/maison-composants/create-maison/create-maison.component';
import { CreateAppartementComponent } from './composants/Biens/Habitations/appartement-composants/create-appartement/create-appartement.component';
import { CreateStudioComponent } from './composants/Biens/Habitations/studio-composants/create-studio/create-studio.component';
import { LoginComponent } from './composants/login/login.component';
import { RegisterComponent } from './composants/register/register.component';
import { HomeComponent } from './composants/home/home.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { BoardAdminComponent } from './composants/board-admin/board-admin.component';
import { BoardAgentComponent } from './composants/board-agent/board-agent.component';
import { BoardLocComponent } from './composants/board-loc/board-loc.component';
import { BoardPropComponent } from './composants/board-prop/board-prop.component';
import { BoardClientComponent } from './composants/board-client/board-client.component';
import { CreateBureauComponent } from './composants/Biens/Commerciaux/bureau-composants/create-bureau/create-bureau.component';
import { CreateCommerceComponent } from './composants/Biens/Commerciaux/commerce-composants/create-commerce/create-commerce.component';
import { CreateEntrepotComponent } from './composants/Biens/Commerciaux/entrepot-composants/create-entrepot/create-entrepot.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ListeVisitesComponent } from './composants/Visite/visites-composants/liste-visites/liste-visites.component';
import { CreateVisiteComponent } from './composants/Visite/visites-composants/create-visite/create-visite.component';
import { CreateAdressePersonneComponent } from './composants/Adresses/adressePersonne-composants/create-adresse-personne/create-adresse-personne.component';
import { CreateAdresseBienComponent } from './composants/Adresses/adresseBien-composants/create-adresse-bien/create-adresse-bien.component';
import { CreateContratLocationComponent } from './composants/Contrats/contratLocation-composants/create-contrat-location/create-contrat-location.component';
import { CreateContratVenteComponent } from './composants/Contrats/contratVente-composants/create-contrat-vente/create-contrat-vente.component';



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
    CreateTerrainComponent,
    CreateMaisonComponent,
    CreateAppartementComponent,
    CreateStudioComponent,
    ListeProprietairesComponent,
    CreateProprietaireComponent,
    ListeAdministrateursComponent,
    CreateAdministrateurComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardAgentComponent,
    BoardLocComponent,
    BoardPropComponent,
    BoardClientComponent,
    CreateBureauComponent,
    CreateCommerceComponent,
    CreateEntrepotComponent,
    ListeVisitesComponent,
    CreateVisiteComponent,
    CreateAdresseBienComponent,
    CreateContratLocationComponent,
    CreateContratVenteComponent,
    CreateAdressePersonneComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
