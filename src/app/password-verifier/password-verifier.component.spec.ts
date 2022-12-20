import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVerifierComponent } from './password-verifier.component';

describe('PasswordVerifierComponent', () => {
  let component: PasswordVerifierComponent;
  let fixture: ComponentFixture<PasswordVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordVerifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
