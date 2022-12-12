import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToastError from "../../../Utils/Function/ErrorMessage";
import { useSetRecoilState } from "recoil";
import { PasswordAtom } from "../../../Store/atoms";
import * as _ from "../Sign.Style"
import ToastSuccess from "../../../Utils/Function/SuccessMessage";

const SetPwPage = () => {
  const setPassword = useSetRecoilState(PasswordAtom)
  const [inputs, setInputs] = useState({
    password: "",
    rePassword: "",
  });
  const { password, rePassword } = inputs;

  const Disabled = !(password && rePassword);
  const PwBorder = !(password)
  const RePwBorder = !(rePassword)

  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const SamePwCheck = () => {
    if (password === rePassword) {
      setPassword(password)
      ToastSuccess("비밀번호가 설정되었습니다.")
      navigate("/setPrivacy")
    }
    else {
      ToastError("비밀번호가 다릅니다.")
    }
  };

  return (
    <>
      <_.Container>
        <_.Box>
          <_.SubTitle>회원가입</_.SubTitle>
          <_.InputWrapper>
            <_.Text>비밀번호</_.Text>
            <_.Input
              placeholder="8~20자, 알파벳 대문자, 특수문자를 포함해야 합니다."
              name="password"
              type="password"
              onChange={onChange}
              borderColor={PwBorder ? "red" : "green"}
              inputs={PwBorder}
              value={password}></_.Input>
          </_.InputWrapper>
          <_.InputWrapper>
            <_.Text>비밀번호 확인</_.Text>
            <_.Input
              placeholder="8~20자, 알파벳 대문자, 특수문자를 포함해야 합니다."
              name="rePassword"
              type="Password"
              borderColor={RePwBorder ? "red" : "green"}
              inputs={RePwBorder}
              onKeyPress={(e) => { if (e.key == "Enter") { SamePwCheck() } }}
              onChange={onChange}
              value={rePassword}></_.Input>
          </_.InputWrapper>
          <_.Wrapper>
            <_.SmallButton onClick={SamePwCheck} disabled={Disabled}>
              확인
            </_.SmallButton>
          </_.Wrapper>
        </_.Box>
      </_.Container>
    </>
  );
};

export default SetPwPage;