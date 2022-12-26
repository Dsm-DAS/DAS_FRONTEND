import request from "../../axios/axios";

export default {
  getAllNotice() {
    //전제공지 가져오기
    return request({
      url: `/notice`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    }).catch((res) => {});
  },
  getNoticeDetail(id: number) {
    //공지상세보기
    return request({
      url: `/notice/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    }).catch((res) => {});
  },
};
