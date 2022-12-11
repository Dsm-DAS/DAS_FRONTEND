import styled from "styled-components";
import BackDeco from "../Assets/img/BackDeco.svg";
import PageCard from "../components/PageCard/PageCard";

const Student = () => {
  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>학생</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>대마고의 모든 학생들을 여기서 확인하실 수 있습니다.</Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <CardWrapper>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
        <PageCard></PageCard>
      </CardWrapper>
    </Container>
  );
};

export default Student;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
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

const CardWrapper = styled.div`
  width: 1200px;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
`;
