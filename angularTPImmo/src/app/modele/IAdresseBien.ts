import { IAdresse } from './IAdresse';
import { IBien } from './IBien';

/**
 * Modèle de données pour AdressePersonne
 */
export interface IAdresseBien extends IAdresse {

    bien : IBien;

}