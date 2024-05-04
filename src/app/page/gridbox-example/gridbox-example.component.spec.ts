import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridboxExampleComponent } from './gridbox-example.component';

describe('GridboxExampleComponent', () => {
  let component: GridboxExampleComponent;
  let fixture: ComponentFixture<GridboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridboxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
