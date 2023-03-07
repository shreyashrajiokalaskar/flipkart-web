import { Component, OnInit } from "@angular/core";
import { SocketService } from "libs/shared/src/lib/services/socket-io.service";

@Component({
  selector: "flipkart-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  search = "";
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {}

  searchString() {
    this.socketService.socket.emit("", this.search);
  }
}
