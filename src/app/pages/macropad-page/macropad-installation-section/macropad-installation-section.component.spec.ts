import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadInstallationSectionComponent } from './macropad-installation-section.component';

describe('MacropadInstallationSectionComponent', () => {
  let component: MacropadInstallationSectionComponent;
  let fixture: ComponentFixture<MacropadInstallationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadInstallationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadInstallationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
