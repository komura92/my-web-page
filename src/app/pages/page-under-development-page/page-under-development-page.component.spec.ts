import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnderDevelopmentPageComponent } from './page-under-development-page.component';

describe('PageUnderDevelopmentPageComponent', () => {
  let component: PageUnderDevelopmentPageComponent;
  let fixture: ComponentFixture<PageUnderDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUnderDevelopmentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageUnderDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
