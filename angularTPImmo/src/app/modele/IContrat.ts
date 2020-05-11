import { IBien } from './IBien';
import { IAgent } from './IAgent';
import { IProprietaire } from './IProprietaire';
import { IClient } from './IClient';

/**
 * Modèle de données pour Contrat
 */
export interface IContrat  {

    idContrat : number;
    date : string;
    bien : IBien;
    agent : IAgent;
    proprietaire : IProprietaire;
    client : IClient; 

}