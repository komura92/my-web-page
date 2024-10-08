import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFooterComponent } from './static-footer.component';

describe('StaticFooterComponent', () => {
  let component: StaticFooterComponent;
  let fixture: ComponentFixture<StaticFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
