import styled from "styled-components";
import BackDeco from "../../Assets/img/BackDeco.svg";
import Table from "../../components/NoticeTable/Table";

const NoticePage = () => {
  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>공지</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>주기적으로 접속하여 선생님의 공지를 확인하세요.</Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <Table />
    </Container>
  );
};

export default NoticePage;

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
  margin-bottom: 100px;
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
