import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacropadPageComponent } from './macropad-page.component';

describe('MacropadPageComponent', () => {
  let component: MacropadPageComponent;
  let fixture: ComponentFixture<MacropadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacropadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacropadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
