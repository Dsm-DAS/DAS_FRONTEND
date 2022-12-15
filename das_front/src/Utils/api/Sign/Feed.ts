import request from "../../axios/axios";

export default {
  getFeedLatestAll() {
    //전체모집글 최신순으로 가져오기
    return request({
      url: `/feed/lists`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  getFeedViewOrderAll() {
    //전체모집글 조회수순으로 가져오기
    return request({
      url: `/feed`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  getFeedDetail(feed_id: number) {
    //모집글 상세보기
    return request({
      url: `/feed/${feed_id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
