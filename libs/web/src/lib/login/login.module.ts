import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../routing.module';
@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
