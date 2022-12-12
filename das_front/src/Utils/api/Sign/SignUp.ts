import request from "../../axios/axios";
import ToastError from "../../Function/ErrorMessage";
import ToastSuccess from "../../Function/SuccessMessage";

const SendEmail = (email: string, setEmailState: any) => {
    return request({
        url: `/user/email`,
        method: "post",
        data: { "email": email }
    })
        .then(() => {
            ToastSuccess("이메일이 전송되었습니다.")
            setEmailState(false)
        })
        .catch((err) => {
            switch (err.response.data.status) {
                case 400:
                    return ToastError("이메일을 확인해주세요.");
                case 409:
                    return ToastError("해당 이메일은 이미 가입되었습니다.");
                default:
                    return ToastError("관리자에게 문의하세요.");
            }
        });
}

const CheckEmailCode = (email: string, inputs: object, navigate: any, setEmailState: any, setEmail: any) => {
    return request({
        url: `/user/email`,
        method: "put",
        data: inputs
    })
        .then(() => {
            ToastSuccess("이메일이 인증되었습니다.")
            setEmailState(true)
            navigate("/SetPw")
            setEmail(email)
        })
        .catch((err) => {
            switch (err.response.data.status) {
                case 400:
                    return ToastError("제목 혹은 내용을 확인해주세요.");
                case 401:
                    return ToastError("코드가 다릅니다.");
                default:
                    return ToastError("관리자에게 문의하세요.");
            }
        });
}

const SignUp = (inputs: object, navigate: any) => {
    return request({
        url: `/user/signup`,
        method: "post",
        data: inputs
    })
        .then(() => {
            ToastSuccess("회원가입에 성공하였습니다.")
            navigate("/")
        })
        .catch((err) => {
            switch (err.response.data.status) {
                case 400:
                    return ToastError("제목 혹은 내용을 확인해주세요.");
                case 401:
                    return ToastError("코드가 다릅니다.");
                default:
                    return ToastError("관리자에게 문의하세요.");
            }
        })
}

export default {
    SendEmail, CheckEmailCode, SignUp
}