import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-liste-article',
  templateUrl: './page-liste-article.component.html',
  styleUrls: ['./page-liste-article.component.scss']
})
export class PageListeArticleComponent implements OnInit , OnDestroy{

  public listeArticle: any[] = [];

  public souscription: Subscription | null = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.souscription = this.httpClient
      .get("https://dummyjson.com/products?limit=10")
      .subscribe((listeArticle: any) => this.listeArticle = listeArticle.products)
  }

  ngOnDestroy(): void {
    this.souscription?.unsubscribe();
  }
}
