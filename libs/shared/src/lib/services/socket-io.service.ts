import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class SocketService {
  socket: any;

  constructor() {
    // const { SOCKET_URL } = environment;
    // this.socket = io(SOCKET_URL);
  }
}
