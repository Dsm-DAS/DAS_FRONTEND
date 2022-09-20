import styled from "styled-components";

function Slider() {
  return (
    <Container>
      <Card></Card>
      <Title>동아리 이름</Title>
      <Circles>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Circles>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 500px;
  background-color: #323232;
`;

const Card = styled.div`
  width: 800px;
  height: 300px;
  background-color: white;
  margin-top: 90px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 15px;
`;

const Circles = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 500px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;
