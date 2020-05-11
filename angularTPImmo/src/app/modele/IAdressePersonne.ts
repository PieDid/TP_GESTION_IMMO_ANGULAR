import { IAdresse } from './IAdresse';
import { IPersonne } from './IPersonne';

/**
 * Modèle de données pour AdressePersonne
 */
export interface IAdressePersonne extends IAdresse {

    personne : IPersonne; 

}