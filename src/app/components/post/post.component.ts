import { Component, OnInit } from "@angular/core";
import { UserData } from "src/app/interfaces/user-response.model";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  currentUser: UserData | null = null;
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.apiService.isLoggedInUser();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
    if (!this.isLoggedIn) {
      this.currentUser = null; 
    }
  }

  logout(): void {
    this.apiService.logout();
    this.isLoggedIn = false; 
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

}
