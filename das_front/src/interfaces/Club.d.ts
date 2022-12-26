export interface AllClub {
  club_id: number;
  club_name: string;
  club_image_url: string;
  club_introduce: string;
  club_type: string;
  club_category: string;
  like_counts: number;
}

export interface IClubMember {
  name: string;
  user_id: number;
  profile_image_url: string;
}
