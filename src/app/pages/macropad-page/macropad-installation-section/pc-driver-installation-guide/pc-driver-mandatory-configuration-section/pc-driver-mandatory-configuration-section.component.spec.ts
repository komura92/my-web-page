import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDriverMandatoryConfigurationSectionComponent } from './pc-driver-mandatory-configuration-section.component';

describe('PcDriverMandatoryConfigurationSectionComponent', () => {
  let component: PcDriverMandatoryConfigurationSectionComponent;
  let fixture: ComponentFixture<PcDriverMandatoryConfigurationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcDriverMandatoryConfigurationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcDriverMandatoryConfigurationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
