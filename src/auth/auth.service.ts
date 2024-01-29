import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  register() {
    return {
      nessage: "Register an user",
    };
  }
  login() {
    return {
      nessage: "this is login",
    };
  }
}
