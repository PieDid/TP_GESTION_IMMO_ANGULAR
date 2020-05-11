import { IAdresseBien } from './IAdresseBien';
import { IVisite } from './IVisite';
import { IContrat } from './IContrat';
import { IProprietaire } from './IProprietaire';

/**
 * Modèle de données pour Bien
 */
export interface IBien {

    id_bien : number;
    statut : boolean;
    offre : string;
    prix : number;
    standard : string;
    adresseBien : IAdresseBien;
    dateSoumission : string;
    dateDisposition : string;
    revenu : number;
    listeVisite : IVisite[];
    contrat : IContrat[];
    proprietaire : IProprietaire[]; 

}