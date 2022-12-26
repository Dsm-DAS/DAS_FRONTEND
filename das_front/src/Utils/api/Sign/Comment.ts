import request from "../../axios/axios";
import ToastError from "../../Function/ErrorMessage";
import ToastSuccess from "../../Function/SuccessMessage";

export default {
  postComment(id: number, content: string, navigate: any) {
    //댓글 작성
    return request({
      url: `/comment/${id}`,
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
      data: {
        content,
      },
    })
      .then(() => {
        ToastSuccess("댓글이 성공적으로 작성되었습니다");
        setTimeout(() => {
          navigate(0);
        }, 3000);
      })
      .catch((res) => {
        switch (res.response.status) {
          case 400:
            ToastError("댓글을 적어주세요!");
            break;
        }
      });
  },
};
