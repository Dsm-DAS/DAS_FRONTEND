import React, { useState } from "react";
import sendEmailImg from "../../../Assets/img/sendEmail.svg"
import api from "../../../Utils/api/Sign/SignUp"
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EmailAtom, EmailCheckAtom } from "../../../Store/atoms";
import ToastError from "../../../Utils/Function/ErrorMessage";
import Timer from "../../../components/Timer/Timer";
import * as _ from "../Sign.Style"

const EmailSendPage = () => {
  const setEmail = useSetRecoilState(EmailAtom)
  const [emailCheck, setEmailCheck] = useRecoilState(EmailCheckAtom)
  const [inputs, setInputs] = useState({
    email: "",
    code: "",
  });
  const { email, code } = inputs;

  const EmailBorder = (email.indexOf("@dsm.hs.kr") === -1);
  const CodeBorder = !(code)
  const Disabled = !(email && code);

  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // Email로 코드 전송하는 api
  const SendEmailAPI = () => {
    if (!EmailBorder && emailCheck) {
      api.SendEmail(email, setEmailCheck)
    }
    else {
      ToastError("이메일이 잘못되었거나 여러번 요청하였습니다.")
    }
  };

  // 인증코드 확인하는 api
  const CheckEmailCodeAPI = () => {
    api.CheckEmailCode(email, inputs, navigate, setEmailCheck, setEmail)
  }

  return (
    <>
      <_.Container>
        <_.Box>
          <_.SubTitle>회원가입</_.SubTitle>
          <_.InputWrapper>
            <_.Text>이메일</_.Text>
            <_.Input
              name="email"
              onChange={onChange}
              borderColor={EmailBorder ? "red" : "green"}
              inputs={EmailBorder}
              value={email}
              disabled={!emailCheck}></_.Input>
            <_.SendImg
              src={sendEmailImg}
              onClick={SendEmailAPI} />
          </_.InputWrapper>
          <_.InputWrapper>
            <_.Text>이메일 인증번호</_.Text>
            <_.Input
              name="code"
              type="code"
              borderColor={CodeBorder ? "red" : "green"}
              inputs={CodeBorder}
              onKeyPress={(e) => { if (e.key === "Enter") { CheckEmailCodeAPI() } }}
              onChange={onChange}
              disabled={emailCheck}
              value={code}></_.Input>
            {!emailCheck && <Timer />}
          </_.InputWrapper>
          <_.Wrapper>
            <_.SmallButton onClick={CheckEmailCodeAPI} disabled={Disabled}>
              인증
            </_.SmallButton>
          </_.Wrapper>
        </_.Box>
      </_.Container>
    </>
  );
};

export default EmailSendPage;