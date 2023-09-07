import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private authorizationGet = 'Bearer 918d517a-f223-490f-9bdf-39bd764252c1';
  private authorizationPost = 'Bearer a92bffad-a13f-4b86-b224-8268874c8655';
  
  private getUrl = 'https://beta.api.gateway.overate-vntech.com/api/v2/timeline?limit=20&post_type=0&position=';
  private postUrl = 'https://beta.api.gateway.overate-vntech.com/api/v2/post/create';
  
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    const getHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authorizationGet,
      method: 0,
      projectID: 7006
    });

    return this.http.get(this.getUrl, {
      headers: getHeaders,
    });
  }

  public upPost(title: string, content: string): Observable<any> {
    const uploadPost = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authorizationPost,
      method: 1,
      projectId: 7005
    });

    const body = {
      "card_tag": [],
      "title": title,
      "content": content,
      "create_type": 0,
      "tag": [],
      "medias": [],
      "view": 0,
      "post_type": 0
  }
    return this.http.post(this.postUrl, body, {
      headers: uploadPost,
    });
  }
}
