import { useState } from "react"
import { useSetRecoilState } from "recoil"
import styled from "styled-components"
import { SetPwAtom } from "../../Store/atoms"
import ToastError from "../../Utils/Function/ErrorMessage"
import api from "../../Utils/api/My/My";

const SetPwChange = () => {
    const SetSetPw = useSetRecoilState(SetPwAtom)

    const [reRePassword, setReRePassword] = useState("")
    const [inputs, setInputs] = useState({
        password: "",
        new_password: "",
    });

    const { password, new_password } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const reRePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReRePassword(e.target.value)
    }

    const SameCheck = () => {
        if(new_password === reRePassword) {
            ChangePwAPI()
        }
        else {
            ToastError("비밀번호가 일치하지 않습니다.")
        }
    }

    const ChangePwAPI = () => {
        api.
            ChangePw(inputs, SetSetPw)
    }

    return (
        <Container>
            <TitleText>비밀번호 변경</TitleText>
            <Text>추가적인 비밀번호 변경을 통해 정보를 안전하게 보호하세요.</Text>
            <PwText>현재 비밀번호</PwText>
            <PwInput name="password" value={password} onChange={onChange} type="password" />
            <PwText>새 비밀번호</PwText>
            <PwInput name="new_password" value={new_password} onChange={onChange} type="password" />
            <PwText>새 비밀번호 확인</PwText>
            <PwInput name="reRePassword" value={reRePassword} onChange={reRePwChange} type="password" />
            <Btn onClick={SameCheck}>비밀번호 저장</Btn>
        </Container>
    )
}

export default SetPwChange

const Container = styled.div`
    margin-top: 150px;
`

const Text = styled.div`
    font-weight: 400;
    font-size: 17px;
    color: #7F7F7F;
    margin: 5px 0px 0px 0px;
`

const PwInput = styled.input`
    width: 300px;
    height: 35px;
    background: #F5F5F5;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
`

const PwText = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #7F7F7F;
    margin-top: 20px;
    margin-bottom: 8px;
`

const TitleText = styled.div`
    font-size: 30px;
    font-weight: 500;
`

const Btn = styled.button`
    background: #FD3078;
    box-shadow: 0px 0px 4px rgba(253, 48, 120, 0.5);
    border-radius: 8px;
    border: none;
    width: 120px;
    height: 35px;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    :disabled {
        background-color: #FFCCDE;
    }
`