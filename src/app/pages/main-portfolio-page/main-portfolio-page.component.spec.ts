import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioPageComponent } from './main-portfolio-page.component';

describe('MainPortfolioPageComponent', () => {
  let component: MainPortfolioPageComponent;
  let fixture: ComponentFixture<MainPortfolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPortfolioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
