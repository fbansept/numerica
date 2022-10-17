import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onEditUtilisateur(nomUtilisateur: string) {
    alert("Edition " + nomUtilisateur)
  }

  onDeleteUtilisateur(nomUtilisateur: string) {
    alert("Suppression " + nomUtilisateur)
  }

}
