import styled from "styled-components";
import { Logo2 } from "../Assets/img/Logo";

function Footer() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100px;
  background-color: #eeeeee;
`;
