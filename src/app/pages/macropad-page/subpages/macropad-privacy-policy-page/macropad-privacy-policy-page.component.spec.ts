import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadPrivacyPolicyPageComponent } from './macropad-privacy-policy-page.component';

describe('MacropadPrivacyPolicyPageComponent', () => {
  let component: MacropadPrivacyPolicyPageComponent;
  let fixture: ComponentFixture<MacropadPrivacyPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadPrivacyPolicyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadPrivacyPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
