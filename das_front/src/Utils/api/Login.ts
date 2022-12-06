import request from "../axios/axios";
import { useNavigate } from "react-router-dom";

export default {
    Login(datas: object) {
        return request({
            url: `/user/token`,
            method: "post",
            data: datas
        })
    }
}