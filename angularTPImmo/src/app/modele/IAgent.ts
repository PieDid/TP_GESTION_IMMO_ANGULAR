import { IPersonne } from './IPersonne';
import { IVisite } from './IVisite';
import { IContrat } from './IContrat';

/**
 * Modèle de données pour Agent
 */
export interface IAgent extends IPersonne {

    listeVisite : IVisite[];
    listeContrat : IContrat[];

}