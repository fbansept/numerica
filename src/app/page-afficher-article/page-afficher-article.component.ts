import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-afficher-article',
  templateUrl: './page-afficher-article.component.html',
  styleUrls: ['./page-afficher-article.component.scss']
})
export class PageAfficherArticleComponent implements OnInit {

  public article: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((parametres: any) => {
        this.httpClient.get("https://dummyjson.com/products/" + parametres.id)
          .subscribe(article => this.article = article)
      })
  }

}
