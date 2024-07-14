import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaMirrorProjectPageComponent } from './ninja-mirror-project-page.component';

describe('NinjaMirrorProjectPageComponent', () => {
  let component: NinjaMirrorProjectPageComponent;
  let fixture: ComponentFixture<NinjaMirrorProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaMirrorProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NinjaMirrorProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
