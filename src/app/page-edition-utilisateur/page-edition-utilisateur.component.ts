import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FausseValidationEmailService } from '../services/fausse-validation-email.service';
import { TestTransfertService } from '../services/test-transfert.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-page-edition-utilisateur',
  templateUrl: './page-edition-utilisateur.component.html',
  styleUrls: ['./page-edition-utilisateur.component.scss']
})
export class PageEditionUtilisateurComponent implements OnInit {

  public formulaire: FormGroup = this.formBuilder.group(
    {
      pseudo: ["", [Validators.required]],
      email: ["", {
        validators:
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],

        asyncValidators: [this.fakeValidator.uniqueEmailValidator()],
        updateOn: 'blur'
      }
      ]
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private fakeValidator: FausseValidationEmailService,
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) { }

  public utilisateur: Utilisateur | undefined;

  ngOnInit(): void {

    this.route.params
      .subscribe((parametres: any) => {
        this.httpClient.get("http://localhost:8080/utilisateur/" + parametres.id)
          .subscribe((utilisateur: any) => {
            this.utilisateur = utilisateur
            this.formulaire.patchValue({ "pseudo": this.utilisateur?.pseudo })
          })
      })

  }

  onEnregistrerUtilisateur() {
    if (this.formulaire.valid && this.utilisateur) {

      this.utilisateur.pseudo = this.formulaire.value.pseudo

      this.httpClient
        .put("http://localhost:8080/utilisateur", this.utilisateur)
        .subscribe(resultat => console.log(resultat))
    }
  }

}
