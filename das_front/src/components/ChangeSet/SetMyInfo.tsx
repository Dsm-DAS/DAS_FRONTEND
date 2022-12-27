import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { MyData } from "../../interfaces/My"
import { SetAtom, SetPwAtom } from "../../Store/atoms"
import api from "../../Utils/api/My/My";

const SetMyInfo = ({names, regions, introduces, majors }: MyData) => {
    const SetSet = useSetRecoilState(SetAtom)
    const fileImage = useRecoilValue(SetPwAtom)

    const [inputs, setInputs] = useState({
        profile_image_url: fileImage,
        name: names,
        introduce: (introduces ? introduces : "없음"),
        major: majors,
        stack : "JavaScript",
        region: (regions ? regions : "알 수 없음"),
        link : {
			github : "https://github.com/alsdl0629",
			instagram : "www.instagram.com",
			facebook : "www.facebook.com"
	},
    });

    const { name, introduce, major, region } = inputs;

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const SetInfoAPI = () => {
        api.
            SetInfo(inputs, SetSet)
    }

    return (
        <div>
            <TitleText>계정</TitleText>
            <div>
                <PersonalInfo>
                    <div>
                        <SmallWrapper>
                            <Topic>사용자 이름</Topic>
                            <Contents value={name} name="name" onChange={onChange}/>
                        </SmallWrapper>
                        <SmallWrapper>
                            <Topic>전공</Topic>
                            <Contents value={major} name="major" onChange={onChange} />
                        </SmallWrapper>
                        <SmallWrapper>
                            <Topic>지역</Topic>
                            <Contents value={region} name="region" onChange={onChange} />
                        </SmallWrapper>
                    </div>
                    <SmallWrapper>
                        <Topic>자기소개</Topic>
                        <IntroContents value={introduce} name="introduce" onChange={onChange} />
                    </SmallWrapper>
                </PersonalInfo>
                <Bar />
                <div>
                    <SmallWrapper>
                        <Topic>instagram</Topic>
                        <Contents />
                    </SmallWrapper>
                    <SmallWrapper>
                        <Topic>Facebook</Topic>
                        <Contents />
                    </SmallWrapper>
                </div>
            </div>
            <SetBtn onClick={SetInfoAPI}>저장</SetBtn>
        </div>
    )
}

export default SetMyInfo

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
    font-size: 17px;
    color: #7F7F7F;
    margin-bottom: 8px;
`

const Contents = styled.input`
    width: 300px;
    height: 35px;
    background: #F5F5F5;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
`

const IntroContents = styled.textarea`
    width: 300px;
    height: 220px;
    background: #F5F5F5;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    resize: none;
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