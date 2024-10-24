import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  standalone: true,
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp') as HTMLButtonElement | null;
    const signInButton = document.getElementById('signIn') as HTMLButtonElement | null;
    const container = document.getElementById('container') as HTMLElement | null;
    const forgotPasswordLink = document.getElementById('forgotPasswordLink') as HTMLAnchorElement | null;
    const backToLoginLink = document.querySelector('.back-to-login') as HTMLAnchorElement | null;

    if (signUpButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });
    }

    if (signInButton && container) {
      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }

    if (forgotPasswordLink && container) {
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('show-forgot-password');
      });
    }

    if (backToLoginLink && container) {
      backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('show-forgot-password');
      });
    }
  }
}