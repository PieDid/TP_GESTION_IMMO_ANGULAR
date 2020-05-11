import { IBien } from './IBien';
import { IAgent } from './IAgent';
import { IProprietaire } from './IProprietaire';
import { IClient } from './IClient';

/**
 * Modèle de données pour Visite
 */
export interface IVisite {

    id_visite : number;
    date : string;
    heure : string;
    bien : IBien;
    agent : IAgent;
    client : IClient;
    propriétaire : IProprietaire; 

}