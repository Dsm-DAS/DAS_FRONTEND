import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../Assets/img/Logo";
import axios from "axios";

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

  const Disabled = !(email && password);

  const login = () => {
    axios
      .post(process.env.REACT_APP_BASE_URL + `/user/token`, inputs)
      .then((res) => {
        alert("성공");
        localStorage.setItem("accessToken", res.data.access_token);
        navigate("/");
      })
      .catch((err) => alert("에러"));
  };

  return (
    <Container>
      <Box>
        <Logo color="black" width="1000" height="41"></Logo>
        <SubTitle>로그인</SubTitle>

        <Text>Email</Text>
        <Input name="email" onChange={onChange} value={email}></Input>
        <Text>비밀번호</Text>
        <Input name="password" type="password" onChange={onChange} value={password}></Input>
        <Wrapper>
          <Button onClick={login} disabled={Disabled}>
            로그인
          </Button>
          <Link to="/SignUp">
            <Button>가입</Button>
          </Link>
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
  background-color: #eeeeee;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 470px;
  height: 400px;
  background-color: white;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.45);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

// const Img = styled.img`
//   width: 160px;
//   height: 41px;
//   margin-top: 50px;
// `;

const SubTitle = styled.div`
  font-size: 25px;
  color: black;
  font-weight: 600;
  margin-top: 10px;
`;

const Text = styled.div`
  color: black;
  font-weight: 400;
  width: 400px;
`;

const Input = styled.input`
  width: 406px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  border: 1px solid rgba(0, 0, 0, 0.45);
  margin-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Button = styled.button`
  width: 406px;
  height: 36px;
  border: 0;
  border-radius: 8px;
  background-color: #fd3078;
  border: 1px solid rgba(0, 0, 0, 0.45);
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  &:first-child {
    :disabled {
      background: #ffccde;
    }
  }
  &:last-child {
    background-color: #e6e6e6;
    color: black;
  }
`;
