import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDesignSectionComponent } from './general-design-section.component';

describe('GeneralDesignSectionComponent', () => {
  let component: GeneralDesignSectionComponent;
  let fixture: ComponentFixture<GeneralDesignSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralDesignSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralDesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
