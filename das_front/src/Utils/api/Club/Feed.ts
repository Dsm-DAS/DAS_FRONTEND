import { IMajor } from "../../../interfaces/Enums";
import request from "../../axios/axios";
import ToastError from "../../Function/ErrorMessage";
import ToastSuccess from "../../Function/SuccessMessage";

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
  postFeed(title: string, content: string, das_url: string, major: IMajor, end_at: string, navigate: any) {
    //모집글 작성하기
    return request({
      url: `/feed`,
      method: "post",
      data: {
        title,
        content,
        das_url,
        major,
        end_at,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    })
      .then(() => {
        ToastSuccess("공지가 성공적으로 작성되었습니다.");
        navigate("/gather");
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 400:
            return ToastError("다시 확인해주세요");
          case 401:
            return ToastError("다시 로그인 해주세요");
          case 403:
            return ToastError("권한이 없어요");
          default:
            return ToastError("관리자에게 문의하세요.");
        }
      });
  },
  deleteFeed(id: number) {
    //모집글 삭제하기
    return request({
      url: `/feed/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  updateFeed(title: string, content: string, das_url: string, major: IMajor, end_at: string, id: number) {
    //모집글 삭제하기
    return request({
      url: `/feed/${id}`,
      method: "patch",
      data: {
        title,
        content,
        das_url,
        major,
        end_at,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
