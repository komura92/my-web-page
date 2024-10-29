import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInstallationGuideComponent } from './mobile-installation-guide.component';

describe('MobileInstallationGuideComponent', () => {
  let component: MobileInstallationGuideComponent;
  let fixture: ComponentFixture<MobileInstallationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileInstallationGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileInstallationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
