import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadRepositoriesSectionComponent } from './macropad-repositories-section.component';

describe('MacropadRepositoriesSectionComponent', () => {
  let component: MacropadRepositoriesSectionComponent;
  let fixture: ComponentFixture<MacropadRepositoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadRepositoriesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadRepositoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
