import { Component } from "@angular/core";
import { ApiService } from "./services/api.service";
import { UserData } from "./interfaces/user-response.model";
@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = "angular-Training";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Khôi phục thông tin người dùng từ localStorage khi trang được tải lại
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.apiService.setCurrentUser(JSON.parse(storedUser) as UserData);
    } else {
      this.apiService.logout(); // Đảm bảo rằng đã đăng xuất nếu không có thông tin người dùng
    }
  }

}
