import { Component, Input } from '@angular/core';
import { PasswordType } from '../password-type';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-verifier',
  templateUrl: './password-verifier.component.html',
  styleUrls: ['./password-verifier.component.scss']
})

export class PasswordVerifierComponent {
  @Input()
  faUser = faUser
  faLock = faLock
  passwordStatus: PasswordType = PasswordType.Empty;
  nameError = false;
  passError = false;

  changePassStrength(passText: string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const strArray = passText.split("");
    const hasAllSymbols = strArray.every(ch => specialChars.test(ch))
    const hasAllLetters = strArray.every(ch => /[a-zA-Z]/.test(ch))
    const hasAllNumbers = strArray.every(ch => /\d/.test(ch))


    if (passText.length < 8) {
      this.passwordStatus = PasswordType.Short
      this.passError = true
    }

    if (passText.length >= 8) {
      this.passError = false

      if (hasAllSymbols || hasAllLetters || hasAllNumbers) {
        this.passwordStatus = PasswordType.Easy
      } else {
        this.passwordStatus = PasswordType.Medium
    }

      if (/\d/.test(passText) && /[a-zA-Z]/.test(passText) && specialChars.test(passText)) {
        this.passwordStatus = PasswordType.Strong
      }
    }

    if (!passText.length) {
      this.passwordStatus = PasswordType.Empty
    }
  }

  submitForm(pass: string) {
    if (this.passError) {
      event?.preventDefault()
    }
  }
}
