import request from "../../axios/axios";

export default {
  getFeedAll() {
    //전체동아리 가져오기
    return request({
      url: `/club/lists`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    }).catch((res) => {});
  },
};
