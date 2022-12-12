import styled from "styled-components";
import BackDeoco from "../../Assets/img/BackDeco.svg";
import Eye from "../../Assets/img/Eyes.svg";
import ClubMember from "../../components/PageCard/ClubMemberCard";

const ClubDetail = () => {
  return (
    <Container>
      <Back>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
      </Back>
      <ClubIcon></ClubIcon>
      <div style={{ display: "flex", alignItems: "end", position: "absolute", top: "63vh", left: "13%" }}>
        <ClubName>DSM-정</ClubName>
        <ClubType>전공동아리</ClubType>
      </div>
      <Wrapper>
        <Categories>
          <Category>#웹프론트</Category>
          <Category>#전공동아리</Category>
          <Category>#웹프론트</Category>
        </Categories>
        <Views>
          <img src={Eye} alt="" />
          <View>38</View>
        </Views>
        <div style={{ marginTop: 100 }}>
          <Title>소개</Title>
          <Introduce>간단한 동아리 소개</Introduce>
        </div>
        <div style={{ marginTop: 30, marginBottom: 100 }}>
          <Title>부원</Title>
          <Members>
            <ClubMember></ClubMember>
            <ClubMember></ClubMember>
            <ClubMember></ClubMember>
            <ClubMember></ClubMember>
            <ClubMember></ClubMember>
            <ClubMember></ClubMember>
          </Members>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ClubDetail;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  position: relative;
  width: 100vw;
  height: 45vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const ClubIcon = styled.div`
  position: absolute;
  left: 13%;
  top: 33vh;
  width: 200px;
  height: 200px;
  background-color: red;
`;

const ClubName = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const ClubType = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 74vw;
  min-height: 60vh;
  margin-top: 25vh;
`;

const Categories = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  height: 40px;
  gap: 10px;
`;

const Category = styled.div`
  font-size: 20px;
  font-weight: 350;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 0;
`;

const View = styled.div`
  margin: 0px 7px;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const Introduce = styled.div`
  width: 72vw;
  height: 80px;
  margin-left: 2vw;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
`;

const Members = styled.div`
  width: 70vw;
  margin-left: 4vw;
  margin-top: 20px;
  min-height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
`;
