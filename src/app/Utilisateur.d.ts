import { Pays } from "./Pays";

export interface Utilisateur {
    nom: string,
    email: string,
    estHomme: boolean,
    admin?: boolean,
    pays?: Pays
}