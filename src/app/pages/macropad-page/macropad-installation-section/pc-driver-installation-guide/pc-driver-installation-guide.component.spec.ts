import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDriverInstallationGuideComponent } from './pc-driver-installation-guide.component';

describe('PcDriverInstallationGuideComponent', () => {
  let component: PcDriverInstallationGuideComponent;
  let fixture: ComponentFixture<PcDriverInstallationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcDriverInstallationGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcDriverInstallationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
