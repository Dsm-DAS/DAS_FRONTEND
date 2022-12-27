import request from "../../axios/axios";
import ToastError from "../../Function/ErrorMessage";
import ToastSuccess from "../../Function/SuccessMessage";

const getMyInfo = () => {
    return request({
        url: `/user/my-page`,
        method: "get",
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    });
}

const ChangePw = (inputs: object, SetSetPw: any) => {
    return request({
        url: `/user/password`,
        method: "patch",
        data: inputs,
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    })
        .then((res) => {
            ToastSuccess("비밀번호 변경에 성공하였습니다.");
            SetSetPw(false)
        })
        .catch((err) => {
            switch (err.response.data.status) {
                case 400:
                    return ToastError("비밀번호를 확인해주세요.");
                default:
                    return ToastError("관리자에게 문의하세요.");
            }
        });
};

const SetInfo = (inputs: object, SetSet: any) => {
    return request({
        url: `/user/my-page`,
        method: "put",
        data: inputs,
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    })
        .then((res) => {
            ToastSuccess("회원정보 변경에 성공하였습니다.");
            SetSet(false)
        })
        .catch((err) => {
            switch (err.response.data.status) {
                case 400:
                    return ToastError("값을 다시 확인해주세요.");
                case 401:
                    return ToastError("로그인을 다시해주세요.");
                case 403:
                    return ToastError("권한이 없어요.");
                case 404:
                    return ToastError("해당 회원을 찾을 수 없어요.");
                default:
                    return ToastError("관리자에게 문의하세요.");
            }
        });
};

const LogOut = () => {
    return request({
        url: `/user/logout`,
        method: "delete",
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    });
}

const Delete = () => {
    return request({
        url: `/user`,
        method: "delete",
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    });
}

export default {
    getMyInfo, ChangePw, SetInfo, LogOut, Delete
};