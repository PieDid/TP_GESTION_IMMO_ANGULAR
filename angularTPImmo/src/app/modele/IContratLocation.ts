import { IContrat } from './IContrat';

/**
 * Modèle de données pour ContratLocation
 */
export interface IContratLocation extends IContrat {

    caution : number;
    loyer : number;
    charge : number;
    typeBail : string;
    garniture : string;

}