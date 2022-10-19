import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FausseValidationEmailService } from '../services/fausse-validation-email.service';

@Component({
  selector: 'app-page-edition-utilisateur',
  templateUrl: './page-edition-utilisateur.component.html',
  styleUrls: ['./page-edition-utilisateur.component.scss']
})
export class PageEditionUtilisateurComponent implements OnInit {

  public nomFourni: string = "Franck"

  public formulaire: FormGroup = this.formBuilder.group(
    {
      nom: ["", [Validators.required]],
      email: ["", {
        validators:
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],

        asyncValidators: [this.fakeValidator.uniqueEmailValidator()]
      }
      ]
    }
  );

  constructor(private formBuilder: FormBuilder, private fakeValidator: FausseValidationEmailService) { }

  ngOnInit(): void {

    // this.fakeValidator.emailExists("bansept.franck@gmail.com")
    //   .subscribe(exist => console.log(exist))

    this.fakeValidator._nombreRequete.subscribe(countReq =>
      console.log(countReq)
    )
  }

  onEnregistrerUtilisateur() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value)
    }
  }

}
