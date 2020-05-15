import { Adresse } from './Adresse';

export class Personne{

    identifiant : number;
    nom : string;
    email : string;
    motDePasse : number;
    statut : boolean;
    adresseP : Adresse;

    photo : string;

    constructor(){
        this.adresseP = new Adresse();
    }
}