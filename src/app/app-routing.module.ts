import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAfficherArticleComponent } from './page-afficher-article/page-afficher-article.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';
import { PageListeArticleComponent } from './page-liste-article/page-liste-article.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';

const routes: Routes = [
  { path: "liste-utilisateurs", component: PageListeUtilisateurComponent },
  { path: "edition-utilisateur", component: PageEditionUtilisateurComponent },
  { path: "liste-articles", component: PageListeArticleComponent },
  { path: "article/:id", component: PageAfficherArticleComponent },
  { path: "", redirectTo: "liste-utilisateurs", pathMatch: 'full' },
  { path: "**", component: PageNonTrouveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
