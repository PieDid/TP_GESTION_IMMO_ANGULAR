import { IBien } from './IBien';

/**
 * Modèle de données pour Habitation
 */
export interface IHabitation extends IBien {

    nbPieces : number;
    superficie : number;

}