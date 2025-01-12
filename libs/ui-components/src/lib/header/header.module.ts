import { HeaderComponent } from "./header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, CommonModule, BsDropdownModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
