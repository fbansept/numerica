import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestTransfertService } from '../services/test-transfert.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {


  public listeUtilisateur: Utilisateur[] = []

  constructor(private httpClient: HttpClient, private router: Router,
    private test: TestTransfertService) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/utilisateurs")
      .subscribe((listeUtilisateur: any) => this.listeUtilisateur = listeUtilisateur)
  }

  onEditUtilisateur(utilisateur: Utilisateur, index: number) {
    //this.test._utilisateur.next(utilisateur)
    this.router.navigateByUrl("edition-utilisateur/" + utilisateur.id)
  }

  onDeleteUtilisateur(utilisateur: Utilisateur,) {

  }

}
