import { IContrat } from './IContrat';

/**
 * Modèle de données pour ContratVente
 */
export interface IContratVente extends IContrat {

    prix : number;
    etat : string;

}