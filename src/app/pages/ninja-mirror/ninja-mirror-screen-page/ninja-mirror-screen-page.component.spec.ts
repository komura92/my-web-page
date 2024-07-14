import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaMirrorScreenPageComponent } from './ninja-mirror-screen-page.component';

describe('NinjaMirrorScreenPageComponent', () => {
  let component: NinjaMirrorScreenPageComponent;
  let fixture: ComponentFixture<NinjaMirrorScreenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaMirrorScreenPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NinjaMirrorScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
