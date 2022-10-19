import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteUtilisateurComponent } from './carte-utilisateur/carte-utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';
import { PageListeArticleComponent } from './page-liste-article/page-liste-article.component';
import { PageAfficherArticleComponent } from './page-afficher-article/page-afficher-article.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteUtilisateurComponent,
    PageListeUtilisateurComponent,
    PageEditionUtilisateurComponent,
    PageListeArticleComponent,
    PageAfficherArticleComponent,
    PageNonTrouveComponent,
    PageConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
