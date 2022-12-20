import { Component, Input } from '@angular/core';
import { PasswordType } from '../password-type';

@Component({
  selector: 'app-strength-status',
  templateUrl: './strength-status.component.html',
  styleUrls: ['./strength-status.component.scss']
})
export class StrengthStatusComponent {
  @Input()
  passwordStatus!: PasswordType;
  type = PasswordType
}
