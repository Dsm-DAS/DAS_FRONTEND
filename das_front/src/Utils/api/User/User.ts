import request from "../../axios/axios";

export default {
  getAllUser() {
    //전체유저가져오기
    return request({
      url: `/user`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  getUserDetail(id: number) {
    //유저 상세보기
    return request({
      url: `/user/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
