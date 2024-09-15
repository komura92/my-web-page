import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsStyleNavigationComponent } from './docs-style-navigation.component';

describe('DocsStyleNavigationComponent', () => {
  let component: DocsStyleNavigationComponent;
  let fixture: ComponentFixture<DocsStyleNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsStyleNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocsStyleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
