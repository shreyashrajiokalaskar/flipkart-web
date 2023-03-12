import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUserData } from "libs/shared/src/lib/interfaces/common-interfaces";
import { LoginService } from "./login.service";

@Component({
  selector: "flipkart-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
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
    firstName: "",
    lastName: "",
  };

  constructor(
    private loginService: LoginService,
    private _router: Router,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  createUser() {
    const userData: IUserData = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.loginService.createUser(userData).subscribe((response: any) => {
      console.log(response);
    });
  }

  login() {
    const userData = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value,
    };
    this.loginService.loginUser(userData).subscribe(
      (response: any) => {
        const { firstName, lastName } = response.data;
        this.user.firstName = firstName;
        this.user.lastName = lastName;
        sessionStorage.setItem("userInfo", JSON.stringify(response.data));
        this.toastrService.success("Logged IN", "Success");
        this._router.navigate(["/home"]);
      },
      (error) => {
        this.toastrService.error(error.error.error, "Error");
      }
    );
  }
}
