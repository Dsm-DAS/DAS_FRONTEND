import request from "../../axios/axios";

export default {
  getClubAll() {
    //전체동아리 가져오기
    return request({
      url: `/club/lists`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    }).catch((res) => {});
  },
  getClubDetail(id: number) {
    //동아리 상세정보 확인
    return request({
      url: `/club/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
