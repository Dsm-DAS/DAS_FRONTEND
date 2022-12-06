import styled from "styled-components";
import Logo from "../Assets/img/logoIcon.svg";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="로고이미지" />
        <div>
          <Text>DAS</Text>
          <SUBText>DSM AGENT SYSTEM</SUBText>
        </div>
      </Wrapper>
      <Wrapper style={{ display: "inline-flex", justifyContent: "end" }}>
        <div style={{ textAlign: "right" }}>
          <SUBText>개발자</SUBText>
          <SUBText>개인정보처리방침</SUBText>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  width: 100vw;
  height: 100px;
  background-color: #eeeeee;
`;

const Wrapper = styled.div`
  display: flex;
  width: 340px;
  margin-bottom: 20px;
  align-items: center;
`;

const Text = styled.div`
  color: ${(props) => props.theme.RealBlack};
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
`;

const SUBText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
`;
