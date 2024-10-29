import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerUiComponentComponent } from './swagger-ui-component.component';

describe('SwaggerUiComponentComponent', () => {
  let component: SwaggerUiComponentComponent;
  let fixture: ComponentFixture<SwaggerUiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaggerUiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwaggerUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
