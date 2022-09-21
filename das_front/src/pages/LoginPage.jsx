import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <Box>
        <Logo color="black"></Logo>
        <SubTitle>로그인</SubTitle>
        <Wrapper>
          <Text>ID</Text>
          <Input name="id" onChange={onChange} value={inputs.id}></Input>
          <Text>비밀번호</Text>
          <Input name="pw" onChange={onChange} value={inputs.pw}></Input>
        </Wrapper>
        <Wrapper>
          <Button>로그인</Button>
          <Button>가입</Button>
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
  &:last-child {
    background-color: #e6e6e6;
    color: black;
  }
`;
