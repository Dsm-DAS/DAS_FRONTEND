export interface Public {
  titleName: string;
  profile_image_url: string;
  major: string;
  view_counts: number;
  isMine: boolean;
}

export interface Private {
  titleName: string;
  grade: number;
  class_num: number;
  number: number;
  major: string;
  region: string;
  sex: string;
  introduce: string;
  link_info: ILink;
}

export interface ILink {
  githubs: string;
  instagrams: string;
  facebooks: string;
}

export interface MyData {
  names: string;
  grades: number;
  class_nums: number;
  numbers: number;
  introduces: string;
  majors: string;
  regions: string;
  link_infos: ILink;
}
