import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareSectionComponent } from './hardware-section.component';

describe('HardwareSectionComponent', () => {
  let component: HardwareSectionComponent;
  let fixture: ComponentFixture<HardwareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardwareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
