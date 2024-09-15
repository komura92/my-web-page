import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadFeaturesSectionComponent } from './macropad-features-section.component';

describe('MacropadFeaturesSectionComponent', () => {
  let component: MacropadFeaturesSectionComponent;
  let fixture: ComponentFixture<MacropadFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadFeaturesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
