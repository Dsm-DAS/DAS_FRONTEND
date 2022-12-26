import { IMajor } from "./Enums";

export interface AllFeed {
  created_at?: string;
  feed_id?: number;
  title?: string;
  views?: number;
  writer: FeedWriter;
  major?: IMajor;
  end_at?: string;
}

export interface FeedWriter {
  name: string;
  profile_image_url: string;
  user_id: number;
}

export interface FeedDetail extends AllFeed {
  comment_list: [];
  content: string;
  das_url: string;
  updated_at: string;
}
