import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { LoginService } from './login.service';
import { STORAGE_KEYS } from 'libs/shared/src/lib/constants/common.constants';

@Component({
  selector: 'flipkart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLogin = false;
  isSignUp = false;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  user: {
    firstName: string;
    lastName: string;
  } = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private loginService: LoginService,
    private _router: Router,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        ),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  createUser(backToLogin?: boolean) {
    if (backToLogin) {
      this.loginForm.removeControl('firstName');
      this.loginForm.removeControl('lastName');
    } else {
      this.loginForm.addControl(
        'firstName',
        new FormControl('', [Validators.required])
      );
      this.loginForm.addControl(
        'lastName',
        new FormControl('', [Validators.required])
      );
    }

    const userData: IUserData = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      firstName: this.loginForm.controls['firstName']?.value,
      lastName: this.loginForm.controls['lastName']?.value,
    };
  }

  login(isNewUser?: boolean) {
    const userData: Partial<IUserData> = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    if (!isNewUser) {
      this.loginService.loginUser(userData).subscribe({
        next: (response: any) => {
          const { firstName, lastName } = response.data;
          this.user.firstName = firstName;
          this.user.lastName = lastName;
          localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(response.data));
          this.toastrService.success('Logged in successfully!', 'Success');
          this._router.navigate(['/home']);
        },
        error: (error) => {
          this.toastrService.error(error?.error?.message, 'Error');
        },
      });
    } else {
      userData['firstName'] = this.loginForm.controls['firstName'].value;
      userData['lastName'] = this.loginForm.controls['lastName'].value;

      this.loginService.createUser(userData as IUserData).subscribe({
        next: (response: any) => {
          this.toastrService.success('User created successfully!', 'Success');
          this.loginForm.removeControl('firstName');
          this.loginForm.removeControl('lastName');
        },
        error: (error) => {
          this.toastrService.error(error?.error?.message, 'Error');
        },
      });
    }
  }
}
