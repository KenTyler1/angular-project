
export interface TimelineItem {
  user: User;
  post_id: string;
  is_follow: number;
  my_reaction: number;
  is_review: number;
  average_rating: number;
  food_rating: number;
  price_rating: number;
  spatial_rating: number;
  hygiene_rating: number;
  service_rating: number;
  target_id: string;
  title: string;
  thumbnail: Thumbnail;
  content: string;
  media: Media[];
  tag: any[]; 
  branch: Branch;
  no_of_comment: number;
  no_of_love: number;
  no_of_wow: number;
  value: number;
  no_of_sad: number;
  no_of_angry: number;
  no_of_value: number;
  no_of_nothing: number;
  no_of_shares: number;
  no_of_reaction: number;
  is_share: number;
  is_avatar_post: number;
  post_share: any; 
  status: number;
  view: number;
  is_detect: number;
  position: string;
  card_tag: any[]; 
  created_at: string;
  commentsForPost?: Comment[] | undefined;
}

export interface User {
  user_id: number;
  avatar: string;
  full_name: string;
  nick_name: string;
  identification: number;
  no_of_follow: number;
  contact_type: number;
  is_online: number;
}

export interface Thumbnail {
  domain: string;
  title: string;
  description: string;
  logo: string;
}

export interface Media {
  content: string;
  media_id: string;
  type: number;
  original: MediaDetail;
  medium: MediaDetail;
  thumb: MediaDetail;
}

export interface MediaDetail {
  url: string;
  name: string;
  size: number;
  width: number;
  height: number;
  link_full: string;
}

export interface Branch {
  id: number;
  brand_id: number;
  restaurant_id: number;
  name: string;
  address: string;
  branch_average_rate: number;
  logo: string;
  banner: string;
  is_favorite: number;
  is_enable: number;
  branch_no_of_review: number;
  brand_name: string;
  brand_logo: string;
}

export interface IHttpResponse<T> {
  data: T;
  message: string;
  status: number;
}