import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../Utils/api/Login"
import axios from "axios";
import ToastError from "../../Utils/Function/ToastErrorMessage";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const EmailBorder = (email.indexOf("@dsm.hs.kr") === -1);
  const PwBorder = !(password)
  const Disabled = !(email && password);

  const LoginAPI = () => {
    api
      .Login(inputs)
      .then((res) => {
        alert("성공");
        localStorage.setItem("accessToken", res.data.access_token);
        navigate("/");
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 400:
            return ToastError("제목 혹은 내용을 확인해주세요.");
          case 404:
            return ToastError("해당 계정을 찾을 수 없어요.");
        }
      });
  };

  return (
    <Container>
      <Box>
        <SubTitle>로그인</SubTitle>
        <InputWrapper>
          <Text>Email</Text>
          <Input
            name="email"
            onChange={onChange}
            borderColor={EmailBorder ? "red" : "green"}
            inputs={EmailBorder}
            value={email}></Input>
        </InputWrapper>
        <InputWrapper>
          <Text>비밀번호</Text>
          <Input
            name="password"
            type="password"
            borderColor={PwBorder ? "red" : "green"}
            inputs={PwBorder}
            onChange={onChange}
            value={password}></Input>
        </InputWrapper>
        <Wrapper>
          <Button onClick={LoginAPI} disabled={Disabled}>
            로그인
          </Button>
        </Wrapper>
      </Box>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2B2B2B;
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  height: 400px;
  border-radius: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 80px;
`;

const Text = styled.div`
  color: white;
  font-weight: 500;
  font-size: 15px;
  width: 400px;
`;

const Input = styled.input<{ borderColor?: string; inputs?: boolean, value?: string }>`
  background-color: #2b2b2b;
  color: white;
  width: 406px;
  height: 40px;
  border: 0;
  outline: none;
  border-bottom: 1.5px solid ${(props) => props.inputs ? (props.value ? "red" : "") : "green"};
  margin-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    border-bottom: 1.5px solid ${(props) => props.borderColor};
  }
`;

const Button = styled.button`
  width: 250px;
  height: 60px;
  border: 0px;
  background: #FD3078;
  border-radius: 10px;
  color: white;
  font-weight: 400;
  font-size: 15px;
  margin-top: 16px;
  &:first-child {
    :disabled {
      background: #ffccde;
    }
  }
`;
