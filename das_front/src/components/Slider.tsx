import styled from "styled-components";
import Slider from "react-slick";
import Slide from "./Slide";

function Slidee() {
  return (
    <Container>
      <Slide></Slide>
    </Container>
  );
}

export default Slidee;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 500px;
  background-color: #323232;
  overflow: hidden;
`;
