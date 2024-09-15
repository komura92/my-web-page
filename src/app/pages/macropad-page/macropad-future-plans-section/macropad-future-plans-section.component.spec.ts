import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadFuturePlansSectionComponent } from './macropad-future-plans-section.component';

describe('MacropadFuturePlansSectionComponent', () => {
  let component: MacropadFuturePlansSectionComponent;
  let fixture: ComponentFixture<MacropadFuturePlansSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadFuturePlansSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadFuturePlansSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
