import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSseInstallationGuideComponent } from './backend-sse-installation-guide.component';

describe('BackendSseInstallationGuideComponent', () => {
  let component: BackendSseInstallationGuideComponent;
  let fixture: ComponentFixture<BackendSseInstallationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendSseInstallationGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendSseInstallationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
