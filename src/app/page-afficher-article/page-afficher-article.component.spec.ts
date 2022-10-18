import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAfficherArticleComponent } from './page-afficher-article.component';

describe('PageAfficherArticleComponent', () => {
  let component: PageAfficherArticleComponent;
  let fixture: ComponentFixture<PageAfficherArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAfficherArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAfficherArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
