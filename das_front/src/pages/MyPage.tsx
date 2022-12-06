import styled from "styled-components";
import BackDeco from "../Assets/img/BackDeco.svg";

const MyPage = () => {
  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>마이페이지</Title>
          <Title></Title>
        </Display>
      </Wrapper>
    </Container>
  );
};

export default MyPage;

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
