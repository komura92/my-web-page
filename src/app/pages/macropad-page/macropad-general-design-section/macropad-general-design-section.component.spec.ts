import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadGeneralDesignSectionComponent } from './macropad-general-design-section.component';

describe('MacropadGeneralDesignSectionComponent', () => {
  let component: MacropadGeneralDesignSectionComponent;
  let fixture: ComponentFixture<MacropadGeneralDesignSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadGeneralDesignSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadGeneralDesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
