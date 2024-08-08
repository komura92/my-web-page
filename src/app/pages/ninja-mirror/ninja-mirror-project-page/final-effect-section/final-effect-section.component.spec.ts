import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEffectSectionComponent } from './final-effect-section.component';

describe('FinalEffectSectionComponent', () => {
  let component: FinalEffectSectionComponent;
  let fixture: ComponentFixture<FinalEffectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalEffectSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalEffectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
