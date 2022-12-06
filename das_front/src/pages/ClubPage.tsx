import styled from "styled-components";
import ClubCard from "../components/PageCard/PageCard";
import BackDeoco from "../Assets/img/BackDeco.svg";

const ClubPage = () => {
  const club_type = ["전공동아리", "창체동아리", "자율동아리"];

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
        <Display>
          <Title>동아리</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>대마고의 모든 동아리들을 여기서 확인할 수 있습니다</Content>
          <div style={{ width: 280 }}></div>
        </Display>
        <ClubWrapper>
          {club_type.map((res, i) => {
            return <ClubType key={i}>{res}</ClubType>;
          })}
        </ClubWrapper>
      </Wrapper>
      <Select>
        <option>인기순</option>
        <option>조회수순</option>
      </Select>
      <CardWrapper>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
        <ClubCard></ClubCard>
      </CardWrapper>
    </Container>
  );
};

export default ClubPage;

const Container = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const ClubWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  display: grid;
  display: flex;
  grid-template-rows: repeat(3, 1fr);
  gap: 150px;
`;

const ClubType = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.White};
  font-weight: 500;
  cursor: pointer;
`;

const Select = styled.select`
  margin-left: 13%;
  margin-top: 15px;
`;

const CardWrapper = styled.div`
  width: 1200px;
  display: grid;
  margin-top: 20px;
  margin-left: 150px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;
