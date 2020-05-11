import { IPersonne } from './IPersonne';
import { IContratLocation } from './IContratLocation';

/**
 * Modèle de données pour Locataire
 */
export interface ILocataire extends IPersonne {

    contratLocation : IContratLocation;

}