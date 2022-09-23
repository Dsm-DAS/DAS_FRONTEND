import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";
import { useState } from "react";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    name: "",
    pw: "",
    grade: 0,
    classes: 0,
    num: 0,
  });

  const { id, email, name, pw, grade, classes, num } = inputs;

  const disabled = !(id && email && name && pw && grade && classes && num);

  const OnChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const Success = () => {
    console(1);
  };

  return (
    <>
      <Wrapper>
        <LocaDiv>
          <LogoWrapper>
            <Logo color="black" width="1000" height="41" />
            <LogoText>가입</LogoText>
          </LogoWrapper>
          <div>
            <Text>ID</Text>
            <TextInput name="id" type="id" value={id} onChange={OnChange}></TextInput>
            <WarnText>6~20글자 이내</WarnText>
          </div>
          <div>
            <Text>이메일</Text>
            <TextInput name="email" type="email" value={email} onChange={OnChange}></TextInput>
          </div>
          <div>
            <Text>이름</Text>
            <TextInput name="name" type="name" value={name} onChange={OnChange}></TextInput>
          </div>
          <div>
            <Text>비밀번호</Text>
            <TextInput name="pw" type="password" value={pw} onChange={OnChange}></TextInput>
            <WarnText>8~20자 이내, 알파벳 대문자, 특수문자 1자를 포함해야 합니다.</WarnText>
          </div>
          <ChooseNum>
            <InfoSelect name="grade" onChange={OnChange} value={grade}>
              <option value="0" disabled>
                학년
              </option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
            </InfoSelect>
            <InfoSelect name="classes" onChange={OnChange} value={classes}>
              <option value="0" disabled>
                반
              </option>
              <option value="1">1반</option>
              <option value="2">2반</option>
              <option value="3">3반</option>
              <option value="4">4반</option>
            </InfoSelect>
            <NumberInput name="num" onChange={OnChange} value={num} type="number" min="1" max="20"></NumberInput>
          </ChooseNum>
          <EndBtn disabled={disabled} onClick={Success}>
            가입
          </EndBtn>
        </LocaDiv>
      </Wrapper>
    </>
  );
};

export default SignIn;

const LocaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  margin-top: 130px;
  margin-bottom: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChooseNum = styled.div``;

const LogoText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 4px;
  margin-left: 4px;
`;

const WarnText = styled.div`
  margin-top: 4px;
  margin-left: 6px;
  font-weight: 500;
  font-size: 14px;
  color: #5d5d5d;
`;

const TextInput = styled.input`
  width: 406px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const InfoSelect = styled.select`
  width: 133px;
  height: 34px;
  margin-right: 4px;
  margin-top: 10px;
  background-color: #d9d9d9;
  padding-left: 5px;
  border-radius: 4px;
  border: 0px;
`;

const NumberInput = styled.input`
  width: 133px;
  height: 34px;
  background-color: #d9d9d9;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  border: 0px;
`;

const EndBtn = styled.button`
  width: 406px;
  height: 36px;
  margin-top: 28px;
  background: #fd3078;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  :disabled {
    background: #ffccde;
  }
`;
