import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
  declarations: [ProfileComponent, UserProfileComponent, AddressesComponent],
  imports: [CommonModule, ReactiveFormsModule, RoutingModule, NgOtpInputModule],
})
export class ProfileModule {}
