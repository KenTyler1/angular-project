import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostComponent } from "./components/post/post.component";
import { PostDetailsComponent } from "./components/details/post-details/post-details.component";
import { SidebarComponent } from "./components/details/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer/footer.component";
import { LogInComponent } from "./components/log/log.component";

import { ProfileComponent } from "./pages/profile/profile.component";
import { LogInPagesComponent } from "./pages/log-in/log-in/log-in.component";


import { ApiService } from "./services/api.service";
import { PostService } from "./services/post.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostDetailsComponent,
    SidebarComponent,
    ProfileComponent,
    FooterComponent,
    LogInComponent,
    LogInPagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,CommonModule],
  providers: [ApiService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
