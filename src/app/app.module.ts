import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteUtilisateurComponent } from './carte-utilisateur/carte-utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';
import { PageListeArticleComponent } from './page-liste-article/page-liste-article.component';
import { PageAfficherArticleComponent } from './page-afficher-article/page-afficher-article.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteUtilisateurComponent,
    PageListeUtilisateurComponent,
    PageEditionUtilisateurComponent,
    PageListeArticleComponent,
    PageAfficherArticleComponent,
    PageNonTrouveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
