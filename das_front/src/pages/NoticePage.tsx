import styled from "styled-components";
import BackDeco from "../Assets/img/BackDeco.svg";
import NoticeCard from "../components/PageCard/NoticeCard";

const NoticePage = () => {
  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>모집 공고</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>
            동아리에서 부원을 모집하고 있습니다!
            <br />
            동아리에 지원하고 합격하세요!
          </Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <CardWrapper>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </CardWrapper>
    </Container>
  );
};

export default NoticePage;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 140px;
`;
