import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import {
  TokenSessionResponse,
  UserResponse,
} from "../interfaces/user-response.model";
import { IHttpResponse, TimelineItem } from "../interfaces/time-line.model";
import { UserData } from "../interfaces/user-response.model";
import { PostData } from "../interfaces/post-data.model";
import { Comment } from "../interfaces/comment.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private sessionsUrl =
    "https://beta.api.gateway.overate-vntech.com/api/v4/sessions";

  private loginUrl =
    "https://beta.api.gateway.overate-vntech.com/api/v4/customers/login";

  private timelineUrl =
    "https://beta.api.gateway.overate-vntech.com/api/v2/timeline?limit=20&post_type=0&position=";

  private postdataUrl =
    "https://beta.api.gateway.overate-vntech.com/api/v2/post/create";

  private getCommentUrl =
    "https://beta.api.gateway.overate-vntech.com/api/v2/comment";

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    method: 0,
    projectId: 8888,
  });

  private dataTimeline: BehaviorSubject<TimelineItem[]> = new BehaviorSubject<
    TimelineItem[]
  >([]);
  private timelineData: TimelineItem[] = [];
  private currentUser: UserData | null = null;
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  getSessionToken(): Observable<TokenSessionResponse> {
    return this.http.get<TokenSessionResponse>(this.sessionsUrl, {
      headers: this.headers,
    });
  }

  public loginWithSessionToken(
    token: string,
    username: string,
    password: string
  ): Observable<UserResponse> {
    const loginHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Basic ${token}=:YWxvbGluZTo1YTBkMTkxY2MxZDY1NjA2NWU4NDEwNjI2ZjRmMzg5ZQ==`,
      method: "1",
      projectId: "8888",
    });

    const body = {
      app_type: 2,
      device_uid: "d520c7a8-421b-4563-b955-f5abc56b97ec",
      password: btoa(password),
      username: username,
    };

    return this.http.post<UserResponse>(this.loginUrl, body, {
      headers: loginHeaders,
    });
  }

  setTimelineData(data: TimelineItem[]): void {
    this.timelineData = data;
  }

  getTimelineData(token: string): Observable<IHttpResponse<TimelineItem[]>> {
    const timelineHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      method: "0",
      projectId: "7006",
    });

    return this.http.get<IHttpResponse<TimelineItem[]>>(this.timelineUrl, {
      headers: timelineHeaders,
    });
  }

  public postData(
    token: string,
    title: string,
    content: string
  ): Observable<IHttpResponse<PostData>> {
    const postHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      method: "1",
      projectId: "7005",
    });

    const body = {
      card_tag: [],
      title: title,
      content: content,
      create_type: 0,
      tag: [],
      medias: [],
      view: 0,
      post_type: 0,
    };

    return this.http.post<IHttpResponse<PostData>>(this.postdataUrl, body, {
      headers: postHeaders,
    });
  }

  setCurrentUser(user: UserData): void {
    this.currentUser = user;
    this.isLoggedIn = true;
  }

  getCurrentUser(): UserData | null {
    return this.currentUser;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    console.log("Logging out...");
    this.currentUser = null;
    this.isLoggedIn = false;

    localStorage.removeItem("currentUser");
    console.log("Logged out.");
  }

  timeLineData(): Observable<TimelineItem[]> {
    return this.dataTimeline.asObservable();
  }

  updateTimelineData(newData: TimelineItem[]): void {
    this.dataTimeline.next(newData);
  }

  getComment(
    postId: number,
    token: string
  ): Observable<IHttpResponse<Comment[]>> {
    const params = new HttpParams().set("post_id", postId.toString());
    const getHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      method: 0,
      ProjectID: 7007,
    });
    return this.http.get<IHttpResponse<Comment[]>>(this.getCommentUrl, {
      params: params,
      headers: getHeaders,
    });
  }
}
