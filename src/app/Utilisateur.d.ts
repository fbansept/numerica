import { Pays } from "./Pays";

export interface Utilisateur {
    nom: string,
    estHomme: boolean,
    admin: boolean,
    pays?: Pays
}