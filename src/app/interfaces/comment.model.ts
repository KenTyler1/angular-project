export interface Comment {
  comment_id: string;
  position: string;
  parent_id: string;
  status: number;
  tag: string[];
  message: string;
  user: {
    user_id: number;
    avatar: string;
    full_name: string;
  };
  no_of_angry: number;
  no_of_like: number;
  no_of_love: number;
  no_of_haha: number;
  no_of_sad: number;
  no_of_wow: number;
  no_of_reply: number;
  no_of_reply_comments: number;
  my_reaction: number;
  is_admin: number;
  media: any[];
  thumbnail: {
    domain: string;
    description: string;
    logo: string;
    title: string;
  };
  sticker_id: string;
  updated_at: string;
  created_at: string;
  restaurant_id: string;
  logo: string;
  name: string;
  ownerDocument: any;
}

export interface IHttpResponse<T> {
  data: T;
  message: string;
  status: number;
}
