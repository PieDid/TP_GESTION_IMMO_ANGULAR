import { IPersonne } from './IPersonne';
import { IVisite } from './IVisite';
import { IContrat } from './IContrat';

/**
 * Modèle de données pour Client
 */
export interface IClient extends IPersonne {

    liste_visites : IVisite[];
    liste_contrats : IContrat[];

}