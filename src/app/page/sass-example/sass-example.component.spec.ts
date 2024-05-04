import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassExampleComponent } from './sass-example.component';

describe('SassExampleComponent', () => {
  let component: SassExampleComponent;
  let fixture: ComponentFixture<SassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
