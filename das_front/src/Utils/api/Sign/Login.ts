import request from "../../axios/axios";
import ToastError from "../../Function/ErrorMessage";
import ToastSuccess from "../../Function/SuccessMessage";

const Login = (inputs: object, navigate: any) => {
  return request({
    url: `/user/token`,
    method: "post",
    data: inputs,
  })
    .then((res) => {
      ToastSuccess("로그인에 성공하였습니다.");
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/");
    })
    .catch((err) => {
      switch (err.response.data.status) {
        case 400:
          return ToastError("제목 혹은 내용을 확인해주세요.");
        case 401:
          return ToastError("비밀번호를 확인해주세요.");
        case 404:
          return ToastError("해당 계정을 찾을 수 없어요.");
        default:
          return ToastError("관리자에게 문의하세요.");
      }
    });
};

export default {
  Login,
};
