import { Pays } from "./Pays";
import { Role } from "./Role";

export interface Utilisateur {
    id: number,
    pseudo: string,
    email: string,
    estHomme: boolean,
    listeRole: Role[],
    pays?: Pays
}