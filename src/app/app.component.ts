import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from './Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public listeArticle: any[] = [];

  constructor(private httpClient : HttpClient){}

  ngOnInit(): void {
    this.httpClienth
      .get("https://dummyjson.com/products?limit=10")
      .subscribe((listeArticle: any) => this.listeArticle = listeArticle.products)
  }


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
