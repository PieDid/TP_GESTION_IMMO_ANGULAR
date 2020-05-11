import { IPersonne } from './IPersonne';
import { IBien } from './IBien';
import { IVisite } from './IVisite';
import { IContratVente } from './IContratVente';
import { IContratLocation } from './IContratLocation';

/**
 * Modèle de données pour Propriétaire
 */
export interface IProprietaire extends IPersonne {

    tel_prive : string;
    tel_travail : string;
    liste_biens : IBien[];
    liste_contratsVente : IContratVente[];
    liste_contratsLocation : IContratLocation[];
    liste_visites : IVisite[];

}