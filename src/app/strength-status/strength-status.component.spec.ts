import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthStatusComponent } from './strength-status.component';

describe('StrengthStatusComponent', () => {
  let component: StrengthStatusComponent;
  let fixture: ComponentFixture<StrengthStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
