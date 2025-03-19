import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'libs/shared/src/lib/services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [Validators.email, Validators.required]);

  isResetPassowrd = false;

  constructor(
    private router: Router,
    private commonService: CommonService,
    private toastrService: ToastrService
  ) {
    console.log(this.router.url);
    this.isResetPassowrd = this.router.url.includes('reset-password');
  }

  resetPassword() {
    const token = this.router.url.split('/').reverse()[0];
    this.commonService
      .post('auth/reset-password', { password: this.email.value, token })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastrService.success(
            'Success',
            'Passoword updated successfully!'
          );
        },
      });
  }

  forgotPassword() {
    this.commonService
      .post('auth/forgot-password', { email: this.email.value })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastrService.success(
            'Success',
            'Email has been sent successfully!'
          );
        },
      });
  }
}
