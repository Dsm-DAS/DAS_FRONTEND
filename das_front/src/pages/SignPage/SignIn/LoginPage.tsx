import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../Utils/api/Sign/Login"
import * as _ from "../Sign.Style"

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate()

  const EmailBorder = (email.indexOf("@dsm.hs.kr") === -1);
  const PwBorder = !(password)
  const Disabled = !(email && password);

  const LoginAPI = () => {
    api.Login(inputs, navigate)
  };

  return (
    <_.Container>
      <_.Box>
        <_.SubTitle>로그인</_.SubTitle>
        <_.InputWrapper>
          <_.Text>이메일</_.Text>
          <_.Input
            name="email"
            onChange={onChange}
            borderColor={EmailBorder ? "red" : "green"}
            inputs={EmailBorder}
            value={email}></_.Input>
        </_.InputWrapper>
        <_.InputWrapper>
          <_.Text>비밀번호</_.Text>
          <_.Input
            name="password"
            type="password"
            borderColor={PwBorder ? "red" : "green"}
            inputs={PwBorder}
            onChange={onChange}
            onKeyPress={(e) => { if (e.key == "Enter") { LoginAPI() } }}
            value={password}></_.Input>
        </_.InputWrapper>
        <_.Wrapper>
          <_.BigButton onClick={LoginAPI} disabled={Disabled}>
            로그인
          </_.BigButton>
        </_.Wrapper>
      </_.Box>
    </_.Container>
  );
};

export default LoginPage;