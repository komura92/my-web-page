import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDriverInteractiveConfigurationSectionComponent } from './pc-driver-interactive-configuration-section.component';

describe('PcDriverInteractiveConfigurationSectionComponent', () => {
  let component: PcDriverInteractiveConfigurationSectionComponent;
  let fixture: ComponentFixture<PcDriverInteractiveConfigurationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcDriverInteractiveConfigurationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcDriverInteractiveConfigurationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
