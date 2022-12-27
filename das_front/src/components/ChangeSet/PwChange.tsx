import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { SetAtom, SetPwAtom } from "../../Store/atoms"

const PwChange = () => {
    const Set = useRecoilValue(SetAtom)
    const SetSetPw = useSetRecoilState(SetPwAtom)

    return(
        <Container>
            <TitleText>비밀번호 변경</TitleText>
            <Text>추가적인 비밀번호 변경을 통해 정보를 안전하게 보호하세요.</Text>
            <Btn disabled={Set} onClick={() => {SetSetPw(true)}}>비밀번호 변경</Btn>
        </Container>
    )
}

export default PwChange

const Container = styled.div`
    margin-top: 150px;
`

const Text = styled.div`
    font-weight: 400;
    font-size: 17px;
    color: #7F7F7F;
    margin: 5px 0px 20px 0px;
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
    :disabled {
        background-color: #FFCCDE;
    }
`