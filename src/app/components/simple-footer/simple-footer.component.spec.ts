import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFooterComponent } from './simple-footer.component';

describe('SimpleFooterComponent', () => {
  let component: SimpleFooterComponent;
  let fixture: ComponentFixture<SimpleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
