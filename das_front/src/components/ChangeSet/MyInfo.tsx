import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { MyData } from "../../interfaces/My"
import { SetAtom, SetPwAtom } from "../../Store/atoms"

const MyInfo = ({names, grades, class_nums, regions, numbers, introduces, majors, link_infos }: MyData) => {
    const SetSet = useSetRecoilState(SetAtom)
    const SetPw = useRecoilValue(SetPwAtom)

    return (
        <div>
            <TitleText>계정</TitleText>
            <div>
                <PersonalInfo>
                    <div>
                        <SmallWrapper>
                            <Topic>사용자 이름</Topic>
                            <Contents>{names}</Contents>
                        </SmallWrapper>
                        <SmallWrapper>
                            <Topic>학번</Topic>
                            <Contents>{grades}{class_nums}{String(numbers).padStart(2, "0")}</Contents>
                        </SmallWrapper>
                        <SmallWrapper>
                            <Topic>전공</Topic>
                            <Contents>{majors}</Contents>
                        </SmallWrapper>
                        <SmallWrapper>
                            <Topic>지역</Topic>
                            <Contents>{!regions ? "알 수 없음" : regions}</Contents>
                        </SmallWrapper>
                    </div>
                    <SmallWrapper>
                        <Topic>자기소개</Topic>
                        <Contents>{introduces}</Contents>
                    </SmallWrapper>
                </PersonalInfo>
                <Bar />
                <div>
                    <SmallWrapper>
                        <Topic>instagram</Topic>
                        <Contents>www.instagram.com</Contents>
                    </SmallWrapper>
                    <SmallWrapper>
                        <Topic>Facebook</Topic>
                        <Contents>www.facebook.com</Contents>
                    </SmallWrapper>
                </div>
            </div>
            <SetBtn disabled={SetPw} onClick={() => {SetSet(true)}}>편집</SetBtn>
        </div>
    )
}

export default MyInfo

const SmallWrapper = styled.div`
    margin-bottom: 30px;
    width: 350px;
    word-break: break-all;
`

const Bar = styled.div`
    width: 700px;
    height: 2px;
    background-color:#7F7F7F;
    margin-bottom: 30px;
`

const PersonalInfo = styled.div`
    display: flex;
`

const Topic = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #7F7F7F;
    margin-bottom: 8px;
`

const Contents = styled.div`
    font-size: 20px;
    font-weight: 400;
`

const TitleText = styled.div`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 50px;
`

const SetBtn = styled.button`
    background: #FD3078;
    box-shadow: 0px 0px 4px rgba(253, 48, 120, 0.5);
    border-radius: 8px;
    border: none;
    width: 60px;
    height: 35px;
    font-weight: 500;
    color: white;
    :disabled {
        background-color: #FFCCDE;
    }
`