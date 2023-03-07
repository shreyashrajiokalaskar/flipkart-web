import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
