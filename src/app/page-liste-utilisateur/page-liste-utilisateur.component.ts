import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }



  onEditUtilisateur(nomUtilisateur: string, index: number) {
    alert("Edition " + nomUtilisateur + ' ' + index)
  }

  onDeleteUtilisateur(nomUtilisateur: string) {
    alert("Suppression " + nomUtilisateur)
  }

}
