import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIntroSectionComponent } from './profile-intro-section.component';

describe('ProfileIntroSectionComponent', () => {
  let component: ProfileIntroSectionComponent;
  let fixture: ComponentFixture<ProfileIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileIntroSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
