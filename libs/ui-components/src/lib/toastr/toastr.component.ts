import { Component, OnInit } from "@angular/core";
import { Toast, ToastPackage, ToastrService } from "ngx-toastr";

@Component({
  selector: "impress-toastr",
  templateUrl: "./toastr.component.html",
  styleUrls: ["./toastr.component.scss"],
  preserveWhitespaces: false,
})
export class ToastrComponent extends Toast implements OnInit {
  private _closeButtonClass = "";
  _toastrClass = "";
  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage
  ) {
    super(toastrService, toastPackage);
  }

  ngOnInit() {
    this._setButtonOrTimeOut();
    this._setLayoutsByClass();
  }

  action(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
  private _setButtonOrTimeOut() {
    // this.options.disableTimeOut = this.options.closeButton;
    this.options.progressBar = !this.options.closeButton;
    // this.options.tapToDismiss = !this.options.closeButton;
  }

  private _setLayoutsByClass() {
    switch (this.toastClasses) {
      case "toast-success ngx-toastr":
        this._toastrClass = "success";
        this._closeButtonClass = "btn-success";
        break;
      case "toast-warning ngx-toastr":
        this._toastrClass = "warning";
        this._closeButtonClass = "btn-warning";
        break;
      case "toast-error ngx-toastr":
        this._toastrClass = "error";
        this._closeButtonClass = "btn-error btn-outline";
        break;
      case "toast-info ngx-toastr":
        this._toastrClass = "info";
        this._closeButtonClass = "btn-info";
        break;
      default:
        this._toastrClass = "success";
        this._closeButtonClass = "btn-default";
        break;
    }
    console.log(this._toastrClass, this._closeButtonClass);
  }
}
