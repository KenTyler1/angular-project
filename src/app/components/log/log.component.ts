import { Component, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.scss"],
})
export class LogInComponent {
  @ViewChild("usernameInput", { static: true })
  usernameInput: ElementRef<HTMLInputElement>;
  @ViewChild("passwordInput", { static: true })
  passwordInput: ElementRef<HTMLInputElement>;

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (this.usernameInput && this.passwordInput) {
      const username = this.usernameInput.nativeElement.value;
      const password = this.passwordInput.nativeElement.value;

      // Tiếp tục xử lý đăng nhập
      this.apiService.getSessionToken().subscribe(
        (sessionResponse) => {
          const sessionToken = sessionResponse.data;
          console.log(sessionToken);

          this.apiService
            .loginWithSessionToken(sessionToken, username, password)
            .subscribe(
              (loginResponse) => {
                if (loginResponse.status === 200) {
                  console.log("Login successful:", loginResponse.data);

                  this.apiService.setCurrentUser(loginResponse.data);
                  // Lưu thông tin người dùng vào localStorage
                  localStorage.setItem(
                    "currentUser",
                    JSON.stringify(loginResponse.data)
                  );
                  this.router.navigate(["/profile"]);
                } else {
                  console.log("Login failed:", loginResponse.message);
                }
              },
              (loginError) => {
                console.error("Error logging in:", loginError);
              }
            );
        },
        (sessionError) => {
          console.error("Error getting session token:", sessionError);
        }
      );
    } else {
      console.error("Input elements are not initialized.");
    }
  }
}
