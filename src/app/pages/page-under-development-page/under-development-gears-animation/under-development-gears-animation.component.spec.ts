import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderDevelopmentGearsAnimationComponent } from './under-development-gears-animation.component';

describe('UnderDevelopmentGearsAnimationComponent', () => {
  let component: UnderDevelopmentGearsAnimationComponent;
  let fixture: ComponentFixture<UnderDevelopmentGearsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderDevelopmentGearsAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderDevelopmentGearsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
