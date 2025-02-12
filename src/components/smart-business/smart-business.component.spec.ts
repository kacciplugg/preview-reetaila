import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBusinessComponent } from './smart-business.component';

describe('SmartBusinessComponent', () => {
  let component: SmartBusinessComponent;
  let fixture: ComponentFixture<SmartBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
