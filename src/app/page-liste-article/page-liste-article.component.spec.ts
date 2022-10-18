import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeArticleComponent } from './page-liste-article.component';

describe('PageListeArticleComponent', () => {
  let component: PageListeArticleComponent;
  let fixture: ComponentFixture<PageListeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
