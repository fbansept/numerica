import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-liste-article',
  templateUrl: './page-liste-article.component.html',
  styleUrls: ['./page-liste-article.component.scss']
})
export class PageListeArticleComponent implements OnInit {

  public listeArticle: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get("https://dummyjson.com/products?limit=10")
      .subscribe((listeArticle: any) => this.listeArticle = listeArticle.products)
  }


}
