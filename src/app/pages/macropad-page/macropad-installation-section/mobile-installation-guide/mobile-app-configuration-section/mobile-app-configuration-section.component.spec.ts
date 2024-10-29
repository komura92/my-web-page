import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppConfigurationSectionComponent } from './mobile-app-configuration-section.component';

describe('MobileAppConfigurationSectionComponent', () => {
  let component: MobileAppConfigurationSectionComponent;
  let fixture: ComponentFixture<MobileAppConfigurationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppConfigurationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileAppConfigurationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
