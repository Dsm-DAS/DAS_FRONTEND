import styled from "styled-components";
import DefaultImg from "../../Assets/img/ClubDefaultImg.svg";

const MyClub = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleText>Club</TitleText>
        <SideText>자세히보기 ⨠</SideText>
      </TitleWrapper>
      <Wrapper>
        <img src={DefaultImg} />
        <img src={DefaultImg} />
        <img src={DefaultImg} />
        <img src={DefaultImg} />
      </Wrapper>
    </Container>
  );
};

export default MyClub;

const Container = styled.div`
  width: 17vw;
  height: 180px;
  background: #ffffff;
  border: 0px solid;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 25px;
  overflow: scroll;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 25px 25px 15px 25px;
`;

const SideText = styled.div`
  font-size: 12px;
  color: #757474;
  margin-top: 15px;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-top: 4px;
`;
