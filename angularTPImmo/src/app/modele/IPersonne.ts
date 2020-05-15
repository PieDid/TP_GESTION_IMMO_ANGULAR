import { IAdressePersonne } from './IAdressePersonne';

/**
 * Modèle de données pour Personne
 */
export interface IPersonne {

    identifiant : number;
    nom : string;
    email : string;
    motDePasse : number;
    statut : boolean;
    adresseP : IAdressePersonne;

    photo : string;
}