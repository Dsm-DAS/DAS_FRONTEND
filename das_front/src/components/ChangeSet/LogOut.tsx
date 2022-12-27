import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { SetAtom, SetPwAtom } from "../../Store/atoms"
import api from "../../Utils/api/My/My";

const LogOut = () => {
    const Set = useRecoilValue(SetAtom)
    const SetPw = useRecoilValue(SetPwAtom)

    const LogOutAPI = () => {
        api.
            LogOut()
    }

    const DeleteAPI = () => {
        api.
            Delete()
    }

    return(
        <Container>
            <TitleText>로그아웃</TitleText>
            <BtnWrapper>
                <Btn disabled={Set || SetPw} onClick={LogOutAPI}>로그아웃</Btn>
                <Btn disabled={Set || SetPw} onClick={DeleteAPI}>회원탈퇴</Btn>
            </BtnWrapper>
        </Container>
    )
}

export default LogOut

const Container = styled.div`
    margin-top: 150px;
`

const TitleText = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`

const BtnWrapper = styled.div`
    display: flex;
`

const Btn = styled.button`
    background: #FD3078;
    box-shadow: 0px 0px 4px rgba(253, 48, 120, 0.5);
    border-radius: 8px;
    border: none;
    width: 90px;
    height: 35px;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    :disabled {
        background-color: #FFCCDE;
    }
`