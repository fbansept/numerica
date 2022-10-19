import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent implements OnInit {

  public formulaire: FormGroup = this.formBuilder.group(
    {
      pseudo: ["", [Validators.required]],
      password: ["", [Validators.required]],

    }
  );

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onConnexion() {
    this.httpClient
      .get("http://localhost:8080/autentification")
      .subscribe(() => console.log("connecté"))
  }

}
