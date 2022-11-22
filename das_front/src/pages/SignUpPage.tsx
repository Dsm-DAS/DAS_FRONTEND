import React from "react";
import styled from "styled-components";
import { Logo } from "../Assets/img/Logo";
import { useState } from "react";
import axios from "axios";
import { SelectableElement } from "react-id-swiper";

const SignIn = () => {
  const [pwAgain, setPwAgain] = useState();
  const [certiNum, setCertiNum] = useState();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    grade: 0,
    class_num: 0,
    number: 0,
  });

  const { email, name, password, grade, class_num, number } = inputs;

  const disabled = !(email && name && password && pwAgain && grade && class_num && number);
  const checkPw = password === pwAgain;

  const [certifitions, setCertifitions] = useState({
    certiFirst: false,
    certiSecond: false,
  });

  const OnChange = (e: React.ChangeEvent<SelectableElement>) => {
    if (e.target.name === "pwAgain") {
      setPwAgain(e.target.value);
    }
    if (e.target.name === "CertiNum") {
      setCertiNum(e.target.value);
    }
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const CheckPw = () => {
    checkPw ? Success() : alert("비밀번호와 비밀번호 확인이 다릅니다.");
  };

  const Success = () => {
    axios
      .post(process.env.REACT_APP_BASE_URL + `user/signup`, inputs)
      .then((response) => {
        alert("성공");
      })
      .catch((error) => {
        alert("실패");
      });
  };

  const Certifition = () => {
    axios
      .post(process.env.REACT_APP_BASE_URL + `user/email`, { email: inputs.email })
      .then((response) => {
        alert("성공");
        setCertifitions(() => {
          return {
            certiFirst: true,
            certiSecond: false,
          };
        });
      })
      .catch((error) => {
        alert("실패");
      });
  };

  const CertiNum = () => {
    axios
      .put(process.env.REACT_APP_BASE_URL + `user/email`, {
        email: inputs.email,
        code: certiNum,
      })
      .then((response) => {
        alert("성공");
        setCertifitions(() => {
          return {
            certiFirst: false,
            certiSecond: true,
          };
        });
      })
      .catch((error) => {
        alert("실패");
      });
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
            <Text>이메일</Text>
            <EmailInputs>
              <TextInput
                disabled={certifitions.certiFirst}
                name="email"
                type="email"
                value={email}
                onChange={OnChange}
              ></TextInput>
              <CertiBtn disabled={certifitions.certiFirst} onClick={Certifition}>
                인증
              </CertiBtn>
            </EmailInputs>
            <WarnText>dsm.hs.kr을 사용하세요.</WarnText>
          </div>
          <div>
            <Text>이메일 인증 번호</Text>
            <EmailInputs>
              <TextInput
                disabled={certifitions.certiSecond}
                name="CertiNum"
                type="text"
                value={certiNum}
                onChange={OnChange}
              ></TextInput>
              <CertiBtn disabled={certifitions.certiSecond} onClick={CertiNum}>
                확인
              </CertiBtn>
            </EmailInputs>
          </div>
          <div>
            <Text>이름</Text>
            <TextInput name="name" type="name" value={name} onChange={OnChange}></TextInput>
          </div>
          <div>
            <Text>비밀번호</Text>
            <TextInput name="password" type="password" value={password} onChange={OnChange}></TextInput>
            <WarnText>8~20자 이내, 알파벳 대문자, 특수문자 1자를 포함해야 합니다.</WarnText>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Text>비밀번호 확인</Text>
            <TextInput name="pwAgain" type="password" value={pwAgain || ""} onChange={OnChange}></TextInput>
          </div>
          <div>
            <InfoSelect name="grade" onChange={OnChange} value={grade}>
              <option value="0" disabled>
                학년
              </option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
            </InfoSelect>
            <InfoSelect name="class_num" onChange={OnChange} value={class_num}>
              <option value="0" disabled>
                반
              </option>
              <option value="1">1반</option>
              <option value="2">2반</option>
              <option value="3">3반</option>
              <option value="4">4반</option>
            </InfoSelect>
            <NumberInput name="number" onChange={OnChange} value={number} type="number" min="1" max="20"></NumberInput>
          </div>
          <EndBtn disabled={disabled} onClick={CheckPw}>
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
  height: 650px;
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

const EmailInputs = styled.div`
  display: flex;
  width: 406px;
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
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
  :disabled {
    background-color: #9a9a9a31;
  }
`;

const CertiBtn = styled.button`
  width: 74px;
  height: 40px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  background: #fd3078;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  :disabled {
    background-color: #ffccde;
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
