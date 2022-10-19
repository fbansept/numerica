import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-afficher-article',
  templateUrl: './page-afficher-article.component.html',
  styleUrls: ['./page-afficher-article.component.scss']
})
export class PageAfficherArticleComponent implements OnInit, OnDestroy {

  public article: any;

  public souscription: Subscription | null = null;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.souscription = this.route.params
      .subscribe((parametres: any) => {
        this.httpClient.get("https://dummyjson.com/products/" + parametres.id)
          .subscribe(article => this.article = article)
      })
  }

  ngOnDestroy(): void {
    this.souscription?.unsubscribe();
  }

}
