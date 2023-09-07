import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { TimelineItem } from "src/app/interfaces/time-line.model";
import { PostData } from "src/app/interfaces/post-data.model";
import { Comment } from "src/app/interfaces/comment.model";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  title: string = "Title Testing";
  content: string = "";
  postData: PostData[] = [];
  timelineData: TimelineItem[] = [];
  comment: Comment[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  submitPost() {
    const local = localStorage.getItem("currentUser");
    if (local) {
      const currentUser = JSON.parse(local);
      const access_token = currentUser.access_token;

      console.log(access_token);
      this.apiService
        .postData(access_token, this.title, this.content)
        .subscribe(
          (data) => {
            console.log("Post successful", data);
            console.log(this.title);
            console.log(this.content);

            const newPost: TimelineItem = {
              user: {
                user_id: 85,
                avatar: "mjfDjSbcII2R5FnpqlSNE",
                full_name: "0123456789haha",
                nick_name: "tony",
                identification: 0,
                no_of_follow: 0,
                contact_type: 0,
                is_online: 1,
              },
              post_id: "151",
              is_follow: 0,
              my_reaction: 0,
              is_review: 0,
              average_rating: 0,
              food_rating: 0,
              price_rating: 0,
              spatial_rating: 0,
              hygiene_rating: 0,
              service_rating: 0,
              target_id: "0",
              title: this.title,
              thumbnail: {
                domain: "",
                title: "",
                description: "",
                logo: "",
              },
              content: this.content,
              media: [],
              tag: [],
              branch: {
                id: 0,
                brand_id: 0,
                restaurant_id: 0,
                name: "",
                address: "",
                branch_average_rate: 0,
                logo: "",
                banner: "",
                is_favorite: 1,
                is_enable: 0,
                branch_no_of_review: 0,
                brand_name: "",
                brand_logo: "",
              },
              no_of_comment: 3,
              no_of_love: 0,
              no_of_wow: 0,
              value: 0,
              no_of_sad: 0,
              no_of_angry: 0,
              no_of_value: 0,
              no_of_nothing: 0,
              no_of_shares: 0,
              no_of_reaction: 0,
              is_share: 0,
              is_avatar_post: 0,
              post_share: {},
              status: 0,
              view: 0,
              is_detect: 1,
              position: "2023-08-06T13:13:39.880Z",
              card_tag: [],
              created_at: "08-06-2023 13:13:39",
            };

            this.timelineData.unshift(newPost);
          },
          (error) => {
            console.error("Error post data", error);
          }
        );
    } else {
      console.log("Error");
    }
  }

  loadData(): void {
    const local = localStorage.getItem("currentUser");
    if (local) {
      const currentUser = JSON.parse(local);
      const access_token = currentUser.access_token;

      console.log(access_token);

      this.apiService.getTimelineData(access_token).subscribe(
        (data) => {
          this.timelineData = data.data;
          console.log(this.timelineData);

          this.timelineData.forEach(item => {
            const post_id = Number(item.post_id);;
  
            this.apiService.getComment(post_id, access_token).subscribe(
              (commentData) => {
                const commentsForPost = commentData.data;
                console.log(`Comments for post ${post_id}:`, commentsForPost);
                this.comment.push(...commentsForPost);
              },
              (commentError) => {
                console.error(`Error getting comments for post ${post_id}:`, commentError);
              }
            );
          });

        },
        (dataError) => {
          console.error("Error timeline data", dataError);
        }
      );
    } else {
      console.log("Error localStorage");
    }
  }
}
