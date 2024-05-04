import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxExampleComponent } from './flexbox-example.component';

describe('FlexboxExampleComponent', () => {
  let component: FlexboxExampleComponent;
  let fixture: ComponentFixture<FlexboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
