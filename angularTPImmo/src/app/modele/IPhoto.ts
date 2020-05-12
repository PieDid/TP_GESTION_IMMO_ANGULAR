import { IBien } from './IBien';

/**
 * Modèle de données pour Photo
 */
export interface IPhoto {

    id_photo : number;
    photo : string;
    bien : IBien;

}