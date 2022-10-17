import { Component } from '@angular/core';
import { Utilisateur } from './Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public listeUtilisateur: Utilisateur[] = [
    {
      nom: "Franck",
      estHomme: true,
      admin: true,
      pays: {
        nom: "France",
        iso: "FR"
      }
    },
    {
      nom: "Tom",
      estHomme: false,
      admin: false
    },
    {
      nom: "Sara",
      estHomme: true,
      admin: false
    }
  ]

  onEditUtilisateur(nomUtilisateur: string, index: number) {
    alert("Edition " + nomUtilisateur + ' ' + index)
  }

  onDeleteUtilisateur(nomUtilisateur: string) {
    alert("Suppression " + nomUtilisateur)
  }

}
