import styled from "styled-components"
import man from "../../Assets/img/man.svg"
import instaImg from "../../Assets/img/Insta.svg"
import facebookImg from "../../Assets/img/Facebook.svg"
import githubImg from "../../Assets/img/Github.svg"
import { Private } from "../../interfaces/My"

const PrivateInfo = ({ titleName, grade, class_num, number, major, region, sex, introduce, link_info }: Private) => {
    return (
        <Container>
            <RightBigWrapper>
                <RightSmallWrapper>
                    <div>
                        <SmallText>사용자 이름</SmallText>
                        <BigText>{titleName}</BigText>
                    </div>
                    <div style={{ marginLeft: "2.5vw" }}>
                        <SmallText>사용자 학번</SmallText>
                        <BigText>{grade}{class_num}{String(number).padStart(2, "0")}</BigText>
                    </div>
                </RightSmallWrapper>
                <RightSmallWrapper>
                    <div style={{ marginTop: "3.4vh" }}>
                        <SmallText>전공</SmallText>
                        <BigText>{major}</BigText>
                    </div>
                </RightSmallWrapper>
                <RightSmallWrapper>
                    <div style={{ marginTop: "3.4vh" }}>
                        <SmallText>지역</SmallText>
                        <BigText>{region ? region : "알 수 없음"}</BigText>
                        {sex == "MALE" ? <SexImg src={man} /> : <SexImg src="" />}
                    </div>
                </RightSmallWrapper>
            </RightBigWrapper>
            <SideLine />
            <LeftWrapper>
                <SmallText>자기소개</SmallText>
                <BigText>{introduce}</BigText>
                {link_info ?
                    <ImgWrapper>
                        {link_info.instagrams ? <a href={link_info.instagrams}><WebImg src={instaImg} /></a> : ""}
                        {link_info.facebooks ? <a href={link_info.facebooks}><WebImg src={facebookImg} /></a> : ""}
                        {link_info.githubs ? <a href={link_info.githubs}><WebImg src={githubImg} /></a> : ""}
                    </ImgWrapper>
                    : ""}
            </LeftWrapper>
        </Container>
    )
}

export default PrivateInfo

const Container = styled.div`
    margin-top: 5vh;
    margin-bottom: 40px;
    display: flex;
    width: 68vw;
    align-items: center;
    height: 250px;
    background: #FFFFFF;
    border: 0px solid;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`

const RightBigWrapper = styled.div`
    height: 18vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
`

const ImgWrapper = styled.div`
    position: absolute;
    display: flex;
    margin-left: 41.5vw;
    margin-top: 12vh;
`

const WebImg = styled.img`
    margin-left: 1vw;
    cursor: pointer;
`

const SideLine = styled.div`
    width: 1.5px;
    height: 20vh;
    border: 0px solid;
    background-color: #7F7F7F;
`

const RightSmallWrapper = styled.div`
    display: flex;
    margin-left: 2.7vw;
`

const LeftWrapper = styled.div`
    width: 47vw;
    height: 18vh;
    margin-left: 3vw;
`

const SmallText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #7F7F7F;
`

const BigText = styled.div`
    font-weight: 400;
    font-size: 17px;
    margin-top: 2px;
`

const SexImg = styled.img`
    position: absolute;
    margin-left: 6.8vw;
    margin-top: -2.4vh;
`