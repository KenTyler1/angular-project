export interface PostData {
  card_tag: any[];
  title: string;
  content: string;
  create_type: number;
  tag: any[];
  medias: any[];
  view: number;
  post_type: number;
}


export interface IHttpResponse<T> {
  data: T;
  message: string;
  status: number;
}
