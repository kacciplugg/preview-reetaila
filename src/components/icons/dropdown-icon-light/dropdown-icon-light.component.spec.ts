import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconLightComponent } from './dropdown-icon-light.component';

describe('DropdownIconComponent', () => {
  let component: DropdownIconLightComponent;
  let fixture: ComponentFixture<DropdownIconLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownIconLightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownIconLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
