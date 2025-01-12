import { Component, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { STORAGE_KEYS } from 'libs/shared/src/lib/constants/common.constants';
import { IUserData } from 'libs/shared/src/lib/interfaces/common-interfaces';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userDetails!: IUserData;
  modalRef?: BsModalRef;
  phone = new FormControl('', [
    Validators.max(9999999999),
    Validators.min(5999999999),
  ]);

  constructor(
    private modalService: BsModalService,
    private profileService: ProfileService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userDetails = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USER_INFO) as string
    );
    if(this.userDetails.phone){
      this.phone.setValue(this.userDetails.phone as any);
      this.phone.disable(); 
    }
    this.getUserDetails();
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  onOtpChange(otp: string) {
    if (otp.length === 4) {
      this.verifyOTP();
      this.modalRef?.hide();
      return;
    }
    return;
  }

  verifyOTP() {
    this.updateUserDetails();
  }

  getUserDetails() {
    this.profileService.getUserById(this.userDetails.id as string).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(res.result));
        this.userDetails = res.result as any;
        this.phone.disable();
      },
      error: () => {},
    });
  }

  updateUserDetails() {
    this.profileService
      .updateUser(this.userDetails.id as string, { phone: `${this.phone.value}` })
      .subscribe({
        next: (res) => {
          this.toastrService.success('Phone updated successfully!', 'Success');
          this.getUserDetails();
        },
        error: (error) => {
          this.toastrService.error(error?.error?.message, 'Error');
        },
      });
  }
}
